const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addNewMessage(message) {
  message.added = new Date();

  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [message.text, message.username, message.added]
  );

  return message;
}

async function getMessageById(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows[0];
}

module.exports = { getAllMessages, addNewMessage, getMessageById };
