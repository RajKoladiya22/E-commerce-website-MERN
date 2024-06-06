const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }

  // Check token format
  if (!token.startsWith("Bearer ")) {
    return res.status(400).send({
      success: false,
      message: "Invalid token format.",
    });
  }

  // Extract token value
  const tokenValue = token.split(" ")[1];

  jwt.verify(tokenValue, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: "Failed to authenticate token.",
      });
    }


    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
