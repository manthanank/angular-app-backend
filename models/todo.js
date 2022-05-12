const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    itemName: { type: String },
});

module.exports = { Todo };