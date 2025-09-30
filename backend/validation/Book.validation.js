const { query, body, param } = require("express-validator");
const {
  validQueryParams,
  validEditParams,
  validAddParams,
} = require("../utils/BookValidParams");

// ===================================================

const { allowedFilter, positiveValue, inRangeValue } = require("./filters");

const searchSchema = [
  allowedFilter(query, validQueryParams),
  positiveValue(query, "price"),
  inRangeValue(query, "price", "minprice", "maxprice"),
];

const editSchema = [
  allowedFilter(body, validEditParams),
  positiveValue(body, "price"),
];

const addSchema = [
  allowedFilter(body, validAddParams),
  positiveValue(body, "price"),
];

module.exports = { searchSchema, editSchema, addSchema };
