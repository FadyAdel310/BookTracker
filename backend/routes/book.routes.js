const bookController = require("../controllers/book.controller");

const express = require("express");

const router = express.Router();

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBookById);

module.exports = router;
