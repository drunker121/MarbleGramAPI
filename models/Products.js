const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    pid: {
        type: String,
        required: true,
    },
    name: {
        type : String,
        required: true,
    },
    price : {
        type: Number,
        required:[true, "price must be provided"],
    },
    Category: {
        type: String,
        required:true,
    },
    property_type:{
        type: Array,
        required: true,
    },
    city: {
        type: Array,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Product" , productSchema)