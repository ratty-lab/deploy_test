const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyToken=(req,res,next)=>{
    const tokenHeader = req.headers.authorization;

    if(!tokenHeader){
        res.send('No token found')
    }
    else{
        const token = tokenHeader.split(" ")[1];
        try{

            const decoder = jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.user= decoder;
            next();
            
        }
        catch(error){
            res.send(error.message);
            
        }
    }
}

module.exports = verifyToken