const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'..','data','users.txt'); 
const validateNewUser=(req,res,next)=>{
    const newUserData= req.body;
    
    
    if(newUserData.name!= null && newUserData.name != '' && newUserData.email!= null && newUserData.email != '' && newUserData.phone!= null && newUserData.phone !=''){
        const usersData = fs.readFileSync(filePath,'utf-8');
        usersDataObject = JSON.parse(usersData);
        const user = usersDataObject.find(user=>user.email=== newUserData.email);
        if(user){
            res.send("Email already Exist");
        }
        else{
            
            
            next();
        }
    }
    else{
        res.send("Invalid Data")
    }
}
const validateUser=(req,res,next)=>{
    const userId = req.params.id;
    const usersData = fs.readFileSync(filePath,'utf-8')
    usersDataObject = JSON.parse(usersData);
    const user= usersDataObject.find(user => user.userId === userId)
    if(user){
        req.user= user,
        next();
    }
    else{
        res.send("user Not found")
    }
}

module.exports = {
    validateNewUser,
    validateUser
}