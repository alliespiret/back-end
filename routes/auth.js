const path = require("path");

const express = require("express");

const adminController = require('../controllers/auth');

const router = express.Router();

router.post("/auth", adminController.postLogin); 
// router.post("/question", adminController.postQuestion);
// router.post("/completeverify", adminController.secQuestion);
// router.post("/complete", adminController.complete);
// router.get("/", adminController.getLogin);

module.exports = router;