const PORT = 3000;

const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const bookRouter = require("./routes/book.routes.js");

app.use("/api/books", bookRouter);
