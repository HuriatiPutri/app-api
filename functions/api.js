const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const cors = require('cors')

const router = express.Router();
const app = express();
const port = 3001;
app.use(cors())

app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('app is running');
});

router.post('/login', (req, res) => {
  res.send({
    message: 'LOGIN: POST /login',
    accessToken: '1234567890',
    name: 'John Doe',
    email: 'johnDoe@company.com',
    userId: 1,
    username: 'johnDoe',
    role: 'user'   
  });
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

app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app);
// app.listen(port, () => {
//   console.log(`cli-nodejs-api listening at http://localhost:${port}`)
// });