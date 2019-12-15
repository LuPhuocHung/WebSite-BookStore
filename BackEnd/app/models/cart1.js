const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    totalQty: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cart', cartSchema);