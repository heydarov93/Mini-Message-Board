const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const CustomBadRequestError = require("../errors/CustomBadRequestError");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const { formatDate } = require("../utils/formatDate");

const submitMessage = asyncHandler(async (req, res) => {
  const { username, messageText } = req.body;

  if (!username?.trim() || !messageText?.trim())
    throw new CustomBadRequestError("Name and text can't be empty!");

  const message = await db.addNewMessage({
    text: messageText,
    username: username,
  });

  if (!message) throw new Error("Couldn't add the message.");

  res.redirect(303, "/"); // Use 303 for proper post-redirect-get behavior
});

const showMessageDetails = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);

  if (!message) throw new CustomNotFoundError("Message not found!");

  message.added = formatDate(message.added);

  res.render("message", { message });
});

module.exports = { submitMessage, showMessageDetails };
