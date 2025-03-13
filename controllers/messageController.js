const asyncHandler = require("express-async-handler");
const { addNewMessage, getMessageById } = require("../db");
const CustomBadRequestError = require("../errors/CustomBadRequestError");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const submitMessage = asyncHandler(async (req, res) => {
  const { username, messageText } = req.body;

  if (!username?.trim() || !messageText?.trim())
    throw new CustomBadRequestError("Name and text can't be empty!");

  const message = await addNewMessage({ text: messageText, user: username });

  if (!message) throw new Error("Couldn't add the message.");

  res.redirect(303, "/"); // Use 303 for proper post-redirect-get behavior
});

const showMessageDetails = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const message = await getMessageById(messageId);

  if (!message) throw new CustomNotFoundError("Message not found!");

  res.render("message", { message });
});

module.exports = { submitMessage, showMessageDetails };
