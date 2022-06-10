const { count } = require("console")
const authorModel = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")
const bookModel = require("../models/newBook")






const authordata= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}


const publisherdata= async function (req, res) {
    let publisher= req.body

    let savedData= await publisherModel.create(publisher)
    res.send({msg: savedData})
}



const bkdata= async function (req, res) {
    let book= req.body
    let authorid = book.author
    let pubid =book.publisher
    if(!authorid) {return  res.send({msg: "authorid is mandatory"})  }
    
    const authordet = await authorModel.findById(authorid)

    if(!authordet){ res.send({msg: "Author not found"})  }

    if(!pubid)  {return  res.send({msg: "publisherid is mandatory"})  }
    const pubdata = await publisherModel.findById(pubid)
    if(!pubdata){ res.send({msg: "publisher not found"})  }

      let savedData= await bookModel.create(book)
   
    res.send({msg: savedData})
    
}


const fetchBooksWithAuthorDetails = async function (req, res) {
    let Book = await bookModel.find().populate('author').populate('publisher')
    res.send({msg: Book})

}





module.exports.authorData = authordata
module.exports.publisherData = publisherdata
module.exports.bkdata = bkdata
module.exports.data = fetchBooksWithAuthorDetails

