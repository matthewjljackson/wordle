#!/bin/bash


#Checking the volumes 
docker volume ls

# Remove the volume
docker volume rm wordle_dbdata

# Runs the POSTGRES container (LINE 902)
echo 'Now running the postgres container'
x=$(docker run -it -d  -e POSTGRES_USER=wordle_user -e POSTGRES_DB=wordle_db -e POSTGRES_PASSWORD=wordle_password -v $PWD:/opt/sql -v wordle_dbdata:/var/lib/postgresql/data postgres:13) 

echo ${x} 'is the container ID'


echo 'Container has been made with a volume'
# Run psql to create the database (LINE 904) Substituting the name of the container.
sleep 5
docker exec -it ${x} psql -U wordle_user wordle_db -f /opt/sql/draft-db.sql
sleep 5
echo 'This volume now contains data'
# Kill Postgres container:
#  Rm -f  ${CONTAINER_ID}