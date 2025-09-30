const BookModel = require("../models/book.model");
const { validEditParams } = require("../utils/BookValidParams");
const Jsend = require("../utils/JsendSpecs");
const Pagination = require("../utils/pagination");
const { defaultLimit, defaultPage, LIMIT, PAGE } = Pagination;
const asyncWrapper = require("../middlewares/asyncWrapper");
const getRegexFilter = require("../utils/BookRegexFilter");
const { validationResult } = require("express-validator");
const appError = require("../utils/appError");

const getAllBooks = asyncWrapper(async (req, res, next) => {
  const queryparams = req.query;
  const limit = queryparams.limit || defaultLimit;
  const page = queryparams.page || defaultPage;
  const skip = (page - 1) * limit;

  const regexFilterObj = getRegexFilter(queryparams);

  const [allBooks, totalCount] = await Promise.all([
    BookModel.find(regexFilterObj).limit(limit).skip(skip),
    BookModel.countDocuments(regexFilterObj),
  ]);

  const totalPages = Math.ceil(totalCount / limit);
  const pagination = { total: totalCount, limit, page, totalPages };

  res.json(Jsend.success({ books: allBooks, pagination }));
});

const getBookById = asyncWrapper(async (req, res, next) => {
  const id = +req.params.id;

  const book = await BookModel.findOne({ id });

  if (!book) {
    throw appError(404, "Invalid Book Id");
  }

  res.json(Jsend.success(book));
});

const deleteBookById = asyncWrapper(async (req, res, next) => {
  const id = +req.params.id;

  const deleteResponse = await BookModel.deleteOne({ id });

  if (deleteResponse.deletedCount === 0) {
    return res.status(404).json(Jsend.fail({ id: "Invalid Book Id" }));
  }

  res.json(Jsend.success("Deleted successfully"));
});

const editBookById = asyncWrapper(async (req, res, next) => {
  const id = +req.params.id;
  const params = req.body;
  const updatedBook = await BookModel.findOneAndUpdate(
    { id },
    params,
    { new: true } // return updated doc
  );

  if (!updatedBook) {
    return res.status(404).json(Jsend.fail({ id: "Invalid Book Id" }));
  }

  res.json(Jsend.success(updatedBook));
});

const addBook = asyncWrapper(async (req, res, next) => {
  console.log("hehe", req.body);
  const { title, author, price, category } = req.body;

  const bookData = { title, author, price, category };

  const newBook = await BookModel.create(bookData);

  if (!newBook) {
    throw appError(500, "Failed to create book");
  }
  return res.status(201).json(Jsend.success(newBook));
});

function testdev(input, res) {
  return res.json(input);
}
module.exports = {
  getAllBooks,
  getBookById,
  deleteBookById,
  editBookById,
  addBook,
};
