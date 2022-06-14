const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    Name: String,
    category: String,
    price:{
        type: Number,
        require: true
    }
      
   
}, { timestamps: true });

module.exports = mongoose.model('Poduct', productSchema) //users