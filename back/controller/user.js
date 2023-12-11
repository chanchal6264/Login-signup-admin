const model = require("../model/user");
const User = model.user;
const mongoose = require("mongoose");

exports.register = async (req, res) => {
  const data = req.body;
  const user = new User(data);
  await User.findOne({ email: data.email }).then((result) => {
    if (result === null) {
      if (data.password === data.confirmpassword) {
        user.save();
        res.json({
          success: 1,
          message: "Register Sucessfully",
          result: user,
        });
      } else {
        res.json({
          success: 0,
          message: "Please Enter the same password",
        });
      }
    } else {
      res.json({
        success: 0,
        message: "Email id is exist",
      });
    }
  });
};

exports.login = async (req, res) => {
  const data = req.body;
  await User.findOne({ email: data.email }).then((result) => {
    if (result === null) {
      res.json({
        success: 0,
        message: "Email id is not exist",
      });
    } else {
      if (data.password === result.password) {
        res.json({
          success: 1,
          message: "Logged in successfully",
          result: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Password is wrong",
        });
      }
    }
  });
};

exports.getUsers = async (req, res) => {
  const result = await User.find();
  try {
    res.status(200).json({ message: "User Data", data: result });
  } catch (error) {
    res.status(400).json({ message: "User Data Not Found" });
  }
};

exports.delete = async (req, res) => {
  await User.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.send("user deleted"))
    .catch((err) => res.send("fail"));
};

exports.update = async (req, res) => {
  const data = req.body;
  await User.findByIdAndUpdate({ _id: req.params.id }, { $set: data })
    .then((result) => res.send("User Update Sucessfully"))
    .catch((err) => res.send("fail"));
};
