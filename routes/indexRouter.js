const { Router } = require("express");
const router = Router();

const { showHomePage, showForm } = require("../controllers/indexController");
const { submitMessage } = require("../controllers/messageController");

router.get("/", showHomePage);

router.get("/new", showForm);

router.post("/new", submitMessage);

// router.get("/new", )

module.exports = router;
