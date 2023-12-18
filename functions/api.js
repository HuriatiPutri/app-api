const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const cors = require('cors')

const action = require('../connection/action');
require('dotenv').config();

const router = express.Router();
const app = express();
app.use(express.json())
app.use(cors())
const port = 3001;

app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send(`app is running ${process.env.HOST}`);
});

//CREATE USER
router.post("/createUser", async (req,res, next) => {
  try {
    const data = await action.createUser(req.body);
    res.status(data.code).send(data)
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.post('/login', async function(req, res, next) {
  try {
    const data = await action.getAuth(req.body.email, req.body.password);
    res.status(data.code).send(data)
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.get('/posts', (req, res) => {
  const post = {
    message: 'success',
    data: [
      { id: 1, title: 'Post 1', body: 'This is post 1' },
      { id: 2, title: 'Post 2', body: 'This is post 2' },
      { id: 3, title: 'Post 3', body: 'This is post 3' },
      { id: 4, title: 'Post 4', body: 'This is post 4' },
      { id: 5, title: 'Post 5', body: 'This is post 5' },
      { id: 6, title: 'Post 6', body: 'This is post 6' },
    ]
  };
  res.send(post);
});

router.get('/balance', async (req, res, next) => {
  try {
    const data = await action.getBalance(req.query.userId);
    res.status(data.code).send(data)
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app);
// app.listen(port, () => {
//   console.log(`cli-nodejs-api listening at http://localhost:${port}`)
// });