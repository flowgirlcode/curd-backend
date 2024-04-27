const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter product name"]
        },
        quality: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        }
    }, {
    timeStamps: true
}
)
const Product = mongoose.model("Product",ProductSchema);
module.exports =Product;
