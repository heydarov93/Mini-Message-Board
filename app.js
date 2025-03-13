const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");

const app = express();
// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Folder to retrieve static files from
const assetsPath = path.join(__dirname, "public");

// App level middlewares
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// Use routers
app.use("/", indexRouter);
app.use("/messages", messagesRouter);

// If route not found
app.get("*", (req, res) =>
  res.status(404).render("error", { status: 404, message: "Not found!" })
);

// Error middleware function
app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.statusCode || 500)
    .render("error", { status: err.statusCode || 500, message: err.message });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Mini Message Board application runs on port: ", PORT);
});
