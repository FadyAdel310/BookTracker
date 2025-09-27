const Pagination = require("../utils/pagination");
const { defaultLimit, defaultPage, LIMIT, PAGE } = Pagination;

const getRegexFilter = (queryparams) => {
  const regexFilterObj = {};
  for (let key in queryparams) {
    // Exclude Pagination Parameters
    if (key === LIMIT || key === PAGE) {
      continue;
    }

    const getNum = Number(queryparams[key]);
    if (Number.isNaN(getNum)) {
      // This is not number
      regexFilterObj[key] = {
        $regex: queryparams[key],
        $options: "i",
      };
    }
  }

  const price = +queryparams.price || 0;
  const min = +queryparams.minprice || price;
  const max = +queryparams.maxprice || price;

  if (price) {
    regexFilterObj["price"] = { $gte: min, $lte: max };
  } else if (max) {
    regexFilterObj["price"] = { $gte: min, $lte: max };
  } else if (min && !max) {
    regexFilterObj["price"] = { $gte: min };
  }

  return regexFilterObj;
};

module.exports = getRegexFilter;
