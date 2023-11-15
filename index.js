const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3001;
app.use(cors())

app.use(bodyParser.json());

app.post('/user', (req, res) => {
  res.send({
    message: 'CREATE NEW USER: POST /user',
    body: req.body
  });
});

app.get('/user', (req, res) => {
  res.send('GET USER LIST: GET /user');
});

app.get('/user/:id', (req, res) => {
  res.send('GET USER: GET /user/' + req.params.id);
});

app.patch('/user/:id', (req, res) => {
  const msg = {
    message: 'UPDATE USER: PATCH /user/' + req.params.id,
    body: req.body
  };
  res.send(msg);
});

app.delete('/user/:id', (req, res) => {
  res.send('DELETE USER: DELETE /user/' + req.params.id);
});

app.post('/login', (req, res) => {
  res.send({
    message: 'LOGIN: POST /login',
    accessToken: '1234567890',
    name: 'John Doe',
    email: 'johnDoe@company.com',
    userId: 1,
    username: 'johnDoe'    
  });
});

app.post('/logout', (req, res) => {
  res.send('LOGOUT: POST /logout');
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});