const router = require("express").Router();
const contactsRoute = require("./contactsRoute");

router.use("/contacts", contactsRoute);

module.exports = router;
