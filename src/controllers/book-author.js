const { count } = require("console")
const bookModel= require("../models/bookAuthor")
const authorModel= require("../models/authorModel.js")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}
const getBookByChetanBhagat= async function (req, res) {
    let data= await authorModel.find({author_name: "Chetan bhagat"}).select("author_id")
    console.log(data);
    let book= await bookModel.find({author_id: data[0].author_id})
    res.send({msg: book})
}
const getAuthorByBook= async function (req, res) {
    let data= await bookModel.findOneAndUpdate({name: "Two states"},{$set:{prices:100}},{new:true})
   
    let authordata= await authorModel.find({author_id: data.author_id}).select("author_name")
    let price= data.prices
    res.send({msg: authordata,price})
}

module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBookByChetanBhagat= getBookByChetanBhagat
module.exports.getAuthorByBook= getAuthorByBook
