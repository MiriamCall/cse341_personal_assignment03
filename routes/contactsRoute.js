const router = require("express").Router();
const contactsController = require("../controllers/contactsController");

router.get("/", contactsController.getContacts);
router.get("/:id", contactsController.getContactById);

module.exports = router;
