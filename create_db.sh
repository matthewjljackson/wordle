#!/bin/bash
pg_user=wordle_user
pg_db=wordle_db
pg_pass=wordle_password

#Checking the volumes 
docker volume ls

# Remove the volume
docker volume rm wordle_dbdata

# Runs the POSTGRES container
echo 'Now running the postgres container'
container_id=$(docker run -it -d  -e POSTGRES_USER=${pg_user} -e POSTGRES_DB=${pg_db} -e POSTGRES_PASSWORD=${pg_pass} -v $PWD:/opt/sql -v wordle_dbdata:/var/lib/postgresql/data postgres:13) 

echo ${container_id} 'is the container ID'


echo 'Container has been made with a volume'
# Run psql to create the database, substituting the name of the container.
sleep 5
docker exec -it ${container_id} psql -U ${pg_user} ${pg_db} -f /opt/sql/draft-db.sql

echo 'This volume now contains data'

#Removing the container
docker ps -a | tail -n+2| cut -d " " -f1 | docker container rm -f ${container_id}
 echo 'The container has now been removed.'