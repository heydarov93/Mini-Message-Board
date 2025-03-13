const Router = require("express");
const router = Router();

const { showMessageDetails } = require("../controllers/messageController");

router.get("/:messageId", showMessageDetails);

module.exports = router;
