#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_PASSW = process.env.DB_PASSW;
const DB_PORT = process.env.DB_PORT;

const SQL = `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    username VARCHAR( 255 ) NOT NULL,
    added TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES
    ('Hi there!', 'Mahone'),
    ('Hello World!', 'Charles'),
    ('How are you?', 'Bob'),
    ('Good morning!', 'Alice');
`;

async function main() {
  console.log("Seeding ...");
  const client = new Client({
    connectionString: `postgresql://${DB_USER}:${DB_PASSW}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
