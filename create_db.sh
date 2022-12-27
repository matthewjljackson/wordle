#!/bin/bash
pg_user="wordle_user"
pg_db="wordle_db"
pg_pass="wordle_password"
loop_limit=20
counter=0

#Checking the volumes 
docker volume ls

if [[ $(docker volume ls -f name=wordle_dbdata) == "wordle_dbdata" ]]; then docker volume rm wordle_dbdata; fi

# Remove the volume
docker volume rm wordle_dbdata

# Run the POSTGRES container
echo "Now running the postgres container"
container_id=$(docker run -it -d  -e POSTGRES_USER=${pg_user} -e POSTGRES_DB=${pg_db} -e POSTGRES_PASSWORD=${pg_pass} -v $PWD:/opt/sql -v wordle_dbdata:/var/lib/postgresql/data postgres:13) 

while true; do
  docker exec ${container_id} pg_isready
  if [[ $? -eq 0 ]]; then
    # The server is ready, so exit the loop
    break
  fi
  # Increment the counter variable
  counter=$((counter + 1))

  if [[ ${counter} -ge ${loop_limit} ]]; then
    echo "Error: loop limit reached without the database starting"
    exit 1
  fi

  # Print a message and sleep for 3 seconds before checking again
  echo "Waiting for the database to start..."
  sleep 3
done

# Check the exit status of the docker exec command
if [[ $? -ne 0 ]]; then
  echo "Error: docker exec command failed"
  exit 1
fi


echo "Container has been made with a volume"
# Run psql to create the database, substituting the name of the container.
sleep 5

docker exec -it ${container_id} psql -U ${pg_user} ${pg_db} -f /opt/sql/draft-db.sql



echo "This volume now contains data"

#Removing the container
 docker container rm -f ${container_id}
 echo "The container has now been removed."