const PORT = 3000;

const express = require("express");
const dbConnection = require("./utils/dbConnection.js");
require("dotenv").config();

const app = express();
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

dbConnection();

const bookRouter = require("./routes/book.routes.js");
const Jsend = require("./utils/JsendSpecs.js");

app.use(express.json());

app.use("/api/books", bookRouter);

app.use((errorObj, req, res, next) => {
  res.status(500).json(Jsend.error(500, errorObj.message, null));
});
