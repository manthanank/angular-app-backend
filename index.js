const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const { mongoose } = require('./db.js');

var employeeController = require('./controllers/employeeController.js');
var userController = require('./controllers/usersController.js');
var todoController = require('./controllers/todoController.js');

const app = express();
const user = require('./routes/user');

//app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/user', user)

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/employees', employeeController);
app.use('/users', userController);
app.use('/todo', todoController);