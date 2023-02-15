const express = require('express');
const Prisma = require('@prisma/client')

const prisma = new Prisma.PrismaClient();

const app = express();
const port = 3002;

app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});

app.get('/solutions', async (_req, res) => {
  let solutions = undefined
  try {
    solutions = await prisma;
  } catch (error) {
    console.log(error)
  }

  const response = solutions || [{ id: 1, word: 'equip' }];

  res.status(200).json(response);
});

app.get('/letters', async (_req, res) => {
  let letters = undefined
  let keys = undefined
  try {
    letters = await prisma.letter.findMany();
    keys = letters.map((letter) => { return { key: letter.key }});
  } catch (error) {
    console.log(error)
  }

  keys = keys || allKeys

  res.status(200).json(keys);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const allKeys = [
  { key: 'a' },
  { key: 'b' },
  { key: 'c' },
  { key: 'd' },
  { key: 'e' },
  { key: 'f' },
  { key: 'g' },
  { key: 'h' },
  { key: 'i' },
  { key: 'j' },
  { key: 'k' },
  { key: 'l' },
  { key: 'm' },
  { key: 'n' },
  { key: 'o' },
  { key: 'p' },
  { key: 'q' },
  { key: 'r' },
  { key: 's' },
  { key: 't' },
  { key: 'u' },
  { key: 'v' },
  { key: 'w' },
  { key: 'x' },
  { key: 'y' },
  { key: 'z' },
]
