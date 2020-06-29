const express = require('express');

const authController = require('./controllers/auth');

const app = express();

app.use('/auth', authController);

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});