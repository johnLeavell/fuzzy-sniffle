const db = require("../models");
const jwt = require("jsonwebtoken");

const duplicateUsernameOrEmail = async (req, res) => {
  const { id } = req.params;
  const { email, username } = req.body;
  try {
    const checkUserName = await db.User.findOne({ username: username });
    const checkEmail = await db.User.findOne({ email: email });

    console.log(checkEmail, "---------checkEmail---------");
    console.log(checkUserName, "---------checkUserName---------");

    if (checkUserName) {
      return res.status(400).json({ message: "Username is already in use" });
    }
    if (checkEmail) {
      return res.status(400).json({ message: "Email is already in use" });
    }
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).json({ err: err.message });
    }
    return res.status(500).json({ err: err.message });
  }
};

const checkRolesExist = async (req, res) => {
    
};
