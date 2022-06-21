const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getDistrictsByIdDate", CowinController.getDistrictsByIdDate)

router.get("/getwhether", CowinController.getWhether)
router.get("/getSorted", CowinController.getSortedCity)
router.get("/getAllMemes", CowinController.getAllMemes)
router.post("/memes", CowinController.getMemes)
module.exports = router;