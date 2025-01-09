const jwt = require('jsonwebtoken')
require('dotenv').config();
const assignToken=(req,res)=>{
    const userData= req.body;
    const token = jwt.sign(userData,process.env.JWT_SECRET_KEY,{expiresIn: '1h'});
    res.json(token);
}

module.exports = assignToken