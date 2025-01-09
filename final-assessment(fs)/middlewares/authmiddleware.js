const verifyAdmin=( req,res,next)=>{
    const data = req.body;
    
    
    if(data.username= "Mohit" && data.passcode=== "test123"){

        next();

    }
    else{
        res.send("Wrong Credentials")
    }
}

module.exports = verifyAdmin 