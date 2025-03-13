# Mini Message Board Application

A very simple message board application built with **Node.js**, **Express**, and **EJS**. Users can view messages, submit new messages, and view individual message details.
The application doesn't use any database, instead ```messages``` array is used to store all messages.

---

#### Note: Main goal of the project is to practice Controllers, Middlewares, Views and Routing with Express.js

## Tech Stack

| **Frontend** | **Backend** | **Templating Engine** | **Additional Libraries** |
|--------------|-------------|------------------------|--------------------------|
| HTML         | Node.js     | EJS                    | `express-async-handler`  |
| CSS          | Express     |                        |                          |
| JavaScript   |             |                        |                          |

---

## Features

- View all messages on the home page.
- Submit new messages via a form.
- View individual message details.
- Responsive and clean design.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mini-message-board.git
   cd Mini-Message-Board

2. Install dependencies:
   ```bash
   npm install

3. Start the server:
   ```bash
   npm start

4. Open your browser and navigate to:
   ```http://localhost:8000```

## Routes

| **Route**         | **Method** | **Description**                          |
|-------------------|------------|------------------------------------------|
| `/`               | GET        | Home page displaying all messages.       |
| `/new`            | GET        | Form to submit a new message.            |
| `/new`            | POST       | Handles form submission.                 |
| `/messages/:messageId`   | GET        | Displays details of a specific message.  |

## License

This project is open-source and available under the [MIT License](LICENSE).

## Authors
Yashar Heydarov - [Github](https://github.com/heydarov93) / [Linkedin](https://www.linkedin.com/in/yashar-heydarov/)
