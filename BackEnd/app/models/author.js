const mongoose = require('mongoose');
const Book = require('./../models/book');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true    
    },
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    books: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }]
});



module.exports = mongoose.model('Author',authorSchema);