const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const refpopulate= require("../controllers/refpopulation")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
//************************************************************************************ */
router.post("/authorData", refpopulate.authorData)
router.post("/publisherData", refpopulate.publisherData)
router.post("/bkdata", refpopulate.bkdata)
router.get("/data", refpopulate.data)

module.exports = router;