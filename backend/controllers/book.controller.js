const Books = require("../sampleData/books");

const getAllBooks = (req, res) => {
  res.json(Books);
};

const getBookById = (req, res) => {
  const id = +req.params.id;
  const book = Books.filter((book) => book.id === id);
  res.json(book);
};

module.exports = {
  getAllBooks,
  getBookById,
};
