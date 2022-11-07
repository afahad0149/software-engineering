const { Router } = require("express");
const profileController = require("./controllers/profile.controller");

const router = Router();

router.get("/profile/:name", profileController.getProfile);

module.exports = router;
