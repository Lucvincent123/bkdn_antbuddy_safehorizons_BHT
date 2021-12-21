const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    productID: String,
    productName: { type: String, maxlength: 255},
    supplierID: String,
    categoryID: String,
    unit: { type: String, maxlength: 255},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', Product)