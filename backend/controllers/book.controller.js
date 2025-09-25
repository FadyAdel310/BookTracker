const Books = require("../sampleData/books");

const BookModel = require("../models/book.model");
const validateQueryParams = require("../utils/validateQueryParams");
const BookValidQueryParams = require("../utils/BookValidQueryParams");
const Jsend = require("../utils/JsendSpecs");
const {
  defaultLimit,
  defaultPage,
  LIMIT,
  PAGE,
} = require("../utils/pagination");
const asyncWrapper = require("../middlewares/asyncWrapper");

const getAllBooks = asyncWrapper(async (req, res, next) => {
  const queryparams = req.query;

  const isValid = validateQueryParams(queryparams, BookValidQueryParams);

  if (isValid) {
    const limit = queryparams.limit || defaultLimit;
    const page = queryparams.page || defaultPage;
    const skip = (page - 1) * limit;
    // get regex object to search
    const regexFilterObj = {};
    for (let key in queryparams) {
      //exclude pagination parameters
      if (key !== LIMIT && key !== PAGE) {
        regexFilterObj[key] = {
          $regex: queryparams[key],
          $options: "i",
        };
      }
    }

    const allBooks = await BookModel.find(regexFilterObj)
      .limit(limit)
      .skip(skip);

    res.json(Jsend.success(allBooks));
  } else {
    res.status(404).json(Jsend.fail({ query: "Invalid Search Query" }));
  }
});

const getBookById = asyncWrapper(async (req, res, next) => {
  const id = +req.params.id;
  const book = await BookModel.find({ id: id });
  if (book.length != 0) {
    res.json(Jsend.success(book));
  } else {
    res.status(404).json(Jsend.fail({ id: "Invalid Book Id" }));
  }
});

module.exports = {
  getAllBooks,
  getBookById,
};
