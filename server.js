const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const users = require('./routes/api/users');
const mongoose = require('mongoose');

const db = require('./config/keys').dbcon;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info('MongoDb Connected'))
  .catch(err => console.warn(err));

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/api/users', users);
const PORT = 8081;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
