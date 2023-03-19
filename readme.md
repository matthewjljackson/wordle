  # **Wordle App**

## Description:
This is a clone of the popular game Wordle. This version of the application was built by @matthewjljackson
and being a DevOps Engineer, I have decided to put the application in containers. The benefits of containerisation 
includes:

* Isolating faults
* Operating system compatibility
* Vendor compatibility 

---

## Prerequisites:
* git 
* bash
* docker 

---

## To run using containers: 

Clone the repository: 
```
$ git clone https://github.com/JonathanBanerjee/wordle
$ cd wordle 
```
Ensure the docker is running.

``` 
$ docker-compose up 
```

Note: This is assuming docker-compose is run from the root folder.
---
## To run without using containers: 
Clone the repository:
```
$ git clone https://github.com/JonathanBanerjee/wordle
$ cd wordle
$ node ./server/server.js
```

Open a new terminal using ``` Control or CMD + T ```

```
$ cd frontend
$ npm start
``` 
---

To play the game in your browser, head to this URL:
`https://localhost:3000`

Note: The letters can be typed in, not clicked on. 


In order to run docker-compose, create a ```.env``` file to parse the environment variables into the docker-compose file:


POSTGRES_DB="postgres_db"
POSTGRES_PASSWORD="postgres_password"
POSTGRES_USER="postgres_user"
