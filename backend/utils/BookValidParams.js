const validQueryParams = [
  "title",
  "author",
  "category",
  "price",
  "limit",
  "page",
  "minprice",
  "maxprice",
];
const validEditParams = ["title", "author", "category", "price"];
const validAddParams = ["title", "author", "category", "price"];
module.exports = { validQueryParams, validEditParams, validAddParams };
