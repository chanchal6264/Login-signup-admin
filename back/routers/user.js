const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/alluser", userController.getUsers);
router.delete("/userdelete/:id", userController.delete);
router.patch("/userupdate/:id", userController.update);

exports.router = router;
