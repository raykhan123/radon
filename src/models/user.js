const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance:{ 
        type: Number,
        default:100 
    },
        addres: String,
        age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] //"falana" will give an error
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('Userdetails', userSchema) //users



// String, Number
// Boolean, Object/json, array