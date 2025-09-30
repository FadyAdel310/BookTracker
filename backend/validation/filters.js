const appError = require("../utils/appError");
const getReqMethod = (req, holderMethod) => {
  if (holderMethod === query) return req.query;
  else if (holderMethod === body) return req.body;
  else if (holderMethod === param) return req.params;
  else return null;
};
const { query, body, param } = require("express-validator");

// ============

const allowedFilter = (holderMethod, allowedParams) => {
  return holderMethod().custom((_, { req }) => {
    const reqMethod = getReqMethod(req, holderMethod);
    const queryKeys = Object.keys(reqMethod);
    const invalidKeys = queryKeys.filter((key) => !allowedParams.includes(key));
    if (invalidKeys.length > 0) {
      throw appError(400, `Invalid parameters: ${invalidKeys.join(", ")}`);
    }
    return true;
  });
};

const positiveValue = (holderMethod, value) => {
  return holderMethod(value)
    .optional()
    .isFloat({ gt: 0 })
    .withMessage(`${value} must be a positive number`);
};

const inRangeValue = (holderMethod, value, minValue, maxValue) => {
  return [
    positiveValue(holderMethod, value),
    positiveValue(holderMethod, minValue),
    positiveValue(holderMethod, maxValue),

    holderMethod(maxValue).custom((value, { req }) => {
      const reqMethod = getReqMethod(req, holderMethod);
      if (reqMethod[minValue] && reqMethod[maxValue]) {
        const min = parseFloat(reqMethod[minValue]);
        const max = parseFloat(reqMethod[maxValue]);
        if (min > max) {
          throw appError(400, "minprice must be less than maxprice");
        }
      }
      return true;
    }),

    holderMethod(value).custom((v, { req }) => {
      const reqMethod = getReqMethod(req, holderMethod);
      if (reqMethod[value] && reqMethod[minValue] && reqMethod[maxValue]) {
        const parsedvalue = parseFloat(reqMethod[value]);
        const min = parseFloat(reqMethod[minValue]);
        const max = parseFloat(reqMethod[maxValue]);
        if (parsedvalue < min || parsedvalue > max) {
          throw appError(400, "price must be between minprice and maxprice");
        }
      }
      return true;
    }),
  ];
};

module.exports = { allowedFilter, positiveValue, inRangeValue };
