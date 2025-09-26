const mongoose = require("mongoose");
const dbConnection = async () => {
  const dbEmail = process.env.dbEmail;
  const dbPassword = process.env.dbPassword;
  const dbConnectionName = process.env.dbConnectionName;
  const dbName = process.env.dbName;
  const URL = `mongodb+srv://${dbEmail}:${dbPassword}@${dbConnectionName}.wyiidln.mongodb.net/${dbName}`;
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Database connected succesfully ..");
    })
    .catch((e) => console.log("Error while database connection ..", e.message));
};

module.exports = dbConnection;
