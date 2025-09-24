const Books = require("../sampleData/books");

const BookModel = require("../models/book.model");
const validateQueryParams = require("../utils/validateQueryParams");
const BookSearchableProps = require("../utils/BookSearchableProps");

const getAllBooks = async (req, res) => {
  const queryparams = req.query;

  const isValid = validateQueryParams(queryparams, BookSearchableProps);

  if (isValid) {
    const regexFilterObj = {};
    for (let key in queryparams) {
      regexFilterObj[key] = {
        $regex: queryparams[key],
        $options: "i",
      };
    }
    const allBooks = await BookModel.find(regexFilterObj);
    res.json(allBooks);
  } else {
    res.send("Error in search");
  }
};

const getBookById = async (req, res) => {
  const id = +req.params.id;
  const book = await BookModel.find({ id: id });
  res.json(book);
};

module.exports = {
  getAllBooks,
  getBookById,
};
