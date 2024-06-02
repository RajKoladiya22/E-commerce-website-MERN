const RegisterModel = require("../model/RegisterModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

const Register = async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;

    // Create a new user
    let hashedPassword = await bcrypt.hash(password, 10);
    let User = await RegisterModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Respond with success
    return res.status(201).send({
      success: true,
      message: "User successfully registered",
      data: User,
    });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await RegisterModel.findOne({ email: email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not found",
        data: user,
      });
    }

    //match password
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Password is not match",
      });
    }

    let token = generateToken(user);

    console.log(token);

    return res.status(201).send({
      success: true,
      message: "User successfully logged in",
      token,
      data: user,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const AuthUser = async (req, res) => {
  try {
    res.status(200).send({
        success: true,
        message: "This is a protected route",
        userId: req._id,
      });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  Register,
  login,
  AuthUser
};
