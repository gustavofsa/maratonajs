const express = require('express');
const cors = require('cors');
const db = require('./models');

const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt');

const authController = require('./controllers/auth');
const linkController = require('./controllers/link');

const app = express();

app.use(cors());

app.use(response);
app.use(checkJwt);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);
app.use('/link', linkController);

app.get('/', (req, res) => {
  res.send('Hello World');
})

db.sequelize.sync().then(() => {
  app.listen(3333, () => {
    console.log('Server listening on port 3333');
  });
});
