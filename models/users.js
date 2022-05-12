const mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String},
    password: { type: String}
});

module.exports = { Users };