const Books = require("../sampleData/books");

const BookModel = require("../models/book.model");
const validateQueryParams = require("../utils/validateQueryParams");
const {
  validQueryParams,
  validEditParams,
} = require("../utils/BookValidParams");
const Jsend = require("../utils/JsendSpecs");
const Pagination = require("../utils/pagination");
const { defaultLimit, defaultPage, LIMIT, PAGE } = Pagination;
const asyncWrapper = require("../middlewares/asyncWrapper");
const getRegexFilter = require("../utils/BookRegexFilter");

const getAllBooks = asyncWrapper(async (req, res, next) => {
  const queryparams = req.query;

  const isValid = validateQueryParams(queryparams, validQueryParams);
  if (!isValid) {
    return res.status(400).json(Jsend.fail({ query: "Invalid Search Query" }));
  }

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
    return res.status(404).json(Jsend.fail({ id: "Invalid Book Id" }));
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

  // Validate input
  const isValid = validateQueryParams(params, validEditParams);
  if (!isValid) {
    return res.status(400).json(Jsend.fail("Invalid update parameters"));
  }

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

function testdev(input, res) {
  return res.json(input);
}
module.exports = {
  getAllBooks,
  getBookById,
  deleteBookById,
  editBookById,
};
