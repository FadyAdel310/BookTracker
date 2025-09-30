const appError = (code, msg) => {
  const errorObj = new Error();
  errorObj.code = code;
  errorObj.message = msg;
  return errorObj;
};

module.exports = appError;
