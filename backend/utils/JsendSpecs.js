const SUCCESS = "success";
const FAIL = "fail";
const ERROR = "error";

function success(data) {
  const response = {
    status: SUCCESS,
    data: data,
  };
  return response;
}

function fail(data) {
  const response = {
    status: FAIL,
    data: data,
  };
  return response;
}
function error(code, msg, data) {
  const response = {
    status: ERROR,
    code: code,
    message: msg,
    data: data,
  };
  return response;
}

const Jsend = { success, fail, error };

module.exports = Jsend;
