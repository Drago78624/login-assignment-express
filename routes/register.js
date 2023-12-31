const express = require("express");
const authController = require("../controllers/auth")

const router = express.Router();

router.get("/register", authController.getRegister);

router.post("/register", authController.postRegister);

module.exports = router
