
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: new mongoose.Schema.Types.ObjectId,
    name: {type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);