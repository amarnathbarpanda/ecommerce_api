const mongoose = require('mongoose');

// defining schema for product
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

// creating model using productSchema
const Product = mongoose.model("Product", productSchema);
module.exports = Product;