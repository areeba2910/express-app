const mongoose= require("mongoose");
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
});

let Product= mongoose.model("Products",productSchema);

module.exports= Product;