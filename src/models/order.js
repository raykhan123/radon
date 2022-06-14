const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userid: {
        type: ObjectId
    },
    productid: {
        type: ObjectId
    },
   amount: Number,
   date: {
    type:Date, 
    default:Date.now
   },
   isFreeAppUser: {
    type:Boolean,
    default:false
   }
   
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) //users