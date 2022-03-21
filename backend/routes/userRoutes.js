const express = require("express");
const router = express.Router();
// CONTROLLER
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
