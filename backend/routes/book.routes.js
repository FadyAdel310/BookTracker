const bookController = require("../controllers/book.controller");
const express = require("express");
const {
  searchSchema,
  editSchema,
  addSchema,
} = require("../validation/Book.validation");
const router = express.Router();

router.get("/", searchSchema, bookController.getAllBooks);

router.get("/:id", bookController.getBookById);

router.delete("/:id", bookController.deleteBookById);

router.patch("/:id", editSchema, bookController.editBookById);
router.patch("/:id", editSchema, bookController.editBookById);
router.post("/", addSchema, bookController.addBook);

module.exports = router;
