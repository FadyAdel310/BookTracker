const mongoose = require("mongoose");
const dbConnection = async () => {
  const dbEmail = "fadyadel310forbusiness_db_user";
  const dbPassword = "geoUszIguMpIO5gS";
  const dbConnectionName = "booktracker";
  const dbName = "BookTrackeDb";
  const URL = `mongodb+srv://${dbEmail}:${dbPassword}@${dbConnectionName}.wyiidln.mongodb.net/${dbName}`;
  mongoose.connect(URL).then(() => {
    console.log("Database connected succesfully ..");
  });
};

module.exports = dbConnection;
