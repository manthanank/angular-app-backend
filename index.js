const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
//const { mongoose } = require('./db.js');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database (OLD CODE)
mongoose.connect(config.database);
//mongoose.connect(config.database, { useMongoClient: true});
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();
const user = require('./routes/user');

//app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.json());
//app.use(cors({ origin: 'http://localhost:4200' }));

// CORS Middleware
app.use(cors());

app.use('/user', user)

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.listen(3000, () => console.log('Server started at port : 3000'));
