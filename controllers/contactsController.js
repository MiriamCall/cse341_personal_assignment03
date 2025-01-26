const connectToDatabase = require("../db/db_connect");
const ObjectId = require("mongodb").ObjectId;

const getContacts = async (req, res) => {
  const db = await connectToDatabase(process.env.DB_NAME);
  const contacts = await db.collection("contacts").find().toArray();
  res.json(contacts);
};

const getContactById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const db = await connectToDatabase(process.env.DB_NAME);
  const contact = await db.collection("contacts").findOne({
    _id: userId,
  });
  res.json(contact);
};

module.exports = { getContacts, getContactById };
