const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cart: {
        type: Object,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Order', schema);