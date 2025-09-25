function validateQueryParams(queries, listOFvalid) {
  const queryLength = Object.keys(queries).length;
  if (queryLength > listOFvalid.length) {
    return false;
  }

  let keyValid = true;
  for (let key in queries) {
    keyValid = false;
    for (let i = 0; i < listOFvalid.length; i++) {
      const element = listOFvalid[i];
      if (key === element) {
        keyValid = true;
        break;
      }
    }
    if (!keyValid) {
      return false;
    }
  }
  return true;
}

module.exports = validateQueryParams;
