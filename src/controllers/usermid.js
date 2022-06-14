const userModel = require("../models/user")
const productModel = require("../models/product")
const orderModel = require("../models/order")
const { findById } = require("../models/user")
const createUser= async function (req, res) {
    let data= req.body
  
    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}

const createProduct= async function (req, res) {
    let data= req.body
  
    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}

const createOrder= async function (req, res) {
    let data= req.body
    let uid = data.userid
    let puid = data.productid
    const userdata = await userModel.findById(uid)
    if (!userdata){ return  res.send({msg: "userId not found"})}

    const productdata = await productModel.findById(puid)
    if (!productdata){ return  res.send({msg: "PublisherId not found"})}

    

    let savedData= await orderModel.create(data)
    res.send({msg: savedData})
}





module.exports.createUser = createUser
module.exports.createProduct = createProduct
module.exports.createOrder = createOrder