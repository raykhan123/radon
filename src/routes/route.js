const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userAuthController= require("../controllers/userauth")
const Common= require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userAuthController.createUser  )

router.post("/login", userAuthController.loginUser)

router.get("/users/:userId", userAuthController.getUserData)

router.put("/users/:userId",userAuthController.updateUser)

router.delete("/users/:userId", userAuthController.deleteteUser)

// The userId is sent by front end
router.get("/users/:userId",Common.mid1, userAuthController.getUserData)

router.put("/users/:userId", Common.mid1,userAuthController.updateUser)

router.delete("/users/:userId",Common.mid1, userAuthController.deleteteUser)
module.exports = router;