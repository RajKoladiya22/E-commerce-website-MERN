const RegisterModel = require("../model/RegisterModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

const Register = async (req, res) => {
  try {
    const { name, email, password, cpassword, role } = req.body;
    const user = await RegisterModel.findOne({email : email})
    if(!user){
      // Create a new user
    let hashedPassword = await bcrypt.hash(password, 10);
    let User = await RegisterModel.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    // Respond with success
    return res.status(201).send({
      success: true,
      message: "User successfully registered",
      data: User,
    });
    }else{
      return res.status(500).send({
        success: false,
        message: "Email Already Exists",
      });
    }
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

    let userData = {
      name : user.name,
      email : user.email,
      role : user.role,
      token : token
    }

    return res.status(201).send({
      success: true,
      message: "User successfully logged in",
      // token,
      data: userData,
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
    const { role } = req.user; 
    res.status(200).send({
        success: true,
        message: "This is a protected route",
        userId: req._id,
        role: role 
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
