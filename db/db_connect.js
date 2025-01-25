const { MongoClient } = require("mongodb");

const connectToDatabase = async (dbName) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    console.log("Connected to the database");
    const db = client.db(db_name);
    return db;
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.error(error);
  }
};

module.exports = connectToDatabase;
