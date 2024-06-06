const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const generateToken = (user) => {
    const payload = {
        id : user._id,
        email : user.email,
        name : user.name,
        role : user.role
    }
    return jwt.sign(payload, process.env.JWT_SECRET,{expiresIn : 1000 * 60 * 2})
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}