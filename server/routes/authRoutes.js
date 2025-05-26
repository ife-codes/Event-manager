const express = require("express");
const router = express.Router();

const {login, signup, logout, refresh, whoami} = require("../controllers/authController")

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.get("/refresh", refresh);
router.get("/whoami", whoami);

module.exports = router;
