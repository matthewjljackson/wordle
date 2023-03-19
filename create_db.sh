#!/bin/bash

POSTGRES_USER="wordle_user"
POSTGRES_DB="wordle_db"
POSTGRES_PASSWORD="wordle_password"

# This avoids clashes with existing Postgres servers
POSTGRES_PORT=5433

LOOP_LIMIT=20

# Remove the volume
docker volume rm wordle_dbdata 2>/dev/null

# Run the POSTGRES container
echo "Now running the postgres container"
container_id=$(docker run -it -d  -e POSTGRES_USER=${POSTGRES_USER} -e POSTGRES_DB=${POSTGRES_DB} -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} -v $PWD:/opt/sql -v wordle_dbdata:/var/lib/postgresql/data postgres:13 -p ${POSTGRES_PORT}) 

loop_counter=0
while true; do
  docker exec ${container_id} pg_isready -p ${POSTGRES_PORT}
  if [[ $? -eq 0 ]]; then
    # The server is ready, so exit the loop
    break
  fi

  # Increment the loop_counter variable
  loop_counter=$((loop_counter + 1))
  if [[ ${loop_counter} -ge ${LOOP_LIMIT} ]]; then
    echo "Error: loop limit reached without the database starting"
    exit 1
  fi

  # Print a message and sleep for 3 seconds before checking again
  echo "Waiting for the database to start..."
  sleep 3
done

echo "Container has been made with a volume"

# Run psql to create the database, substituting the name of the container.
sleep 5

docker exec -it ${container_id} psql -U ${POSTGRES_USER} -p ${POSTGRES_PORT} ${POSTGRES_DB} -f /opt/sql/draft-db.sql

echo "This volume now contains data"

#Removing the container
docker container rm -f ${container_id}