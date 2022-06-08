const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/book-author")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", UserController.createAuthor  )
router.post("/createBook", UserController.createBook  )
router.post("/getBookByChetanBhagat", UserController.getBookByChetanBhagat)
router.post("/getAuthorByBook", UserController.getAuthorByBook)

// router.get("/getUsersData", UserController.getUsersData)
module.exports = router;