const bookController = require("../controllers/book.controller");

const express = require("express");

const router = express.Router();

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBookById);
router.delete("/:id", bookController.deleteBookById);

module.exports = router;
