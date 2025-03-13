const asyncHandler = require("express-async-handler");
const { getAllMessages } = require("../db");
const { formatDate } = require("../utils/formatDate");
// const CustomNotFoundError = require("../errors/CustomNotFoundError");

const showHomePage = asyncHandler(async (req, res) => {
  const messages = await getAllMessages();

  const optimizedMessages = messages.map((message) => {
    const msg = { ...message, added: formatDate(message.added) };
    return msg;
  });
  // if (!messages) throw new CustomNotFoundError("messages not found");

  res.render("index", {
    title: "Home",
    heading: "All messages",
    messages: optimizedMessages,
  });
});

const showForm = asyncHandler(async (req, res) => {
  res.render("form", {
    title: "Add a new message",
    heading: "What do you want to say to the world?",
  });
});

module.exports = { showHomePage, showForm };
