# Mini Message Board Application

A very simple message board application built with **Node.js**, **Express**, and **EJS**. Users can view messages, submit new messages, and view individual message details.

Live: [Mini Message Board](https://mini-message-board-production-8e97.up.railway.app/)

---

> [!NOTE]
> Main goal of the project is to practice Controllers, Middlewares, Views and Routing with Express.js.


## Tech Stack

| **Frontend** | **Backend** | **Templating Engine**  | **Additional Libraries** | **DataBase** |
|--------------|-------------|------------------------|--------------------------|--------------|
| HTML         | Node.js     | EJS                    | `express-async-handler`  | PostgreSQL   |
| CSS          | Express     |                        |                          |              |
| JavaScript   |             |                        |                          |              |

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
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create database in PostgreSQL

4. Set following environment variables with related values:
   ```
   DB_HOST=localhost
   DB_USER=username for database
   DB_NAME=database name from step 3
   DB_PASSW=password for username
   DB_PORT=5432
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

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
