const mongoose = require("mongoose");

const bookObj = {
  id: { type: Number, required: false, unique: true },
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
};

const bookSchema = new mongoose.Schema(bookObj);

module.exports = mongoose.model("Book", bookSchema);
