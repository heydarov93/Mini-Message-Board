const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    id: 3,
    text: "Good morning!",
    user: "Alice",
    added: new Date(),
  },
  {
    id: 4,
    text: "How are you?",
    user: "Bob",
    added: new Date(),
  },
];

async function getAllMessages() {
  return messages;
}

async function addNewMessage(message) {
  message.added = new Date();
  message.id = messages.at(-1).id + 1;
  messages.push(message);

  return message;
}

async function getMessageById(messageId) {
  return messages.find((message) => message.id === Number(messageId));
}

module.exports = { getAllMessages, addNewMessage, getMessageById };
