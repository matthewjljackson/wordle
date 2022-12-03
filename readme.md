# To run this application:

# Start the server:
node ./server/server.js

# Open another terminal
Change directory into front end using:
cd frontend
To start the front end:
npm start

In your browser head to:
http://localhost:3000

# Note: The letters can be typed in, not clicked on. 

# To run docker-compose:
Ensure docker desktop is running.
in terminal type docker-compose up
This currently creates a database.

# Docker: 
To build the server contanter
cd server
docker build -t server .

# Docker Error:

# frontend load error.
Replication steps:
cd frontend
docker build -t frontend .

This displays: 
[+] Building 0.1s (2/2) FINISHED                                                                                                                                             
 => [internal] load build definition from Dockerfile                                                                                                                    0.0s
 => => transferring dockerfile: 397B                                                                                                                                    0.0s
 => [internal] load .dockerignore                                                                                                                                       0.0s
 => => transferring context: 32B                                                                                                                                        0.0s
failed to solve with frontend dockerfile.v0: failed to create LLB definition: file with no instructions

# psql errors:
ERROR:  relation "letters" does not exist
LINE 1: INSERT INTO letters (key)
# This appears on numerous lines. 
Replication steps:

Open a new terminal ensure docker is running
docker run -e POSTGRES_PASSWORD=1234 --name p13 -d postgres:13
 docker exec -it p13 psql -U postgres
copy and paste draft-db.sql into the interactive terminal. 


