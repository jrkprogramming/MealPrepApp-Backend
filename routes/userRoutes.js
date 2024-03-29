const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userController");

// router.get("/user/login", userCtrl.showLogin);

// router.get("/user/:id", userCtrl.userProfile);

router.post("/signup", userCtrl.signup);

router.post("/login", userCtrl.login);

// router.post('/mealPrep/:id', userCtrl.addComment);

module.exports = router;
