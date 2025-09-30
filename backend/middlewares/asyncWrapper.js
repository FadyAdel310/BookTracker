const { validationResult } = require("express-validator");
const Jsend = require("../utils/JsendSpecs");

module.exports = (asyncFun) => {
  return (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res
        .status(400)
        .json(Jsend.error(400, result.array()[0]["msg"], null));
    }

    asyncFun(req, res, next).catch((error) => {
      next(error);
    });
  };
};
