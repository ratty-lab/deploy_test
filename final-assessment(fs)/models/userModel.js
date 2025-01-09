const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');


const getUsers=()=>{
    try{

        const filepath = path.join(__dirname,'..','data','users.txt')
        const usersData = fs.readFileSync(filepath,'utf-8')
        return JSON.parse(usersData);
    }
    catch(error){
        return error.message;
    }
    
}
const addUser=(userData)=>{
    const filepath = path.join(__dirname,'..','data','users.txt');
    try{
        
        const usersData = fs.readFileSync(filepath,'utf-8')
        const usersDataObject=JSON.parse(usersData);
        const userFinalData= {"userId":uuidv4(),...userData}
        console.log(userData);
        
        usersDataObject.push(userFinalData)
        fs.writeFileSync(filepath,JSON.stringify(usersDataObject,null,2))
        return "User Added Successfully";
    }
    catch(error){
        return error.message;
        
    }
}


module.exports = {
    getUsers,
    addUser
}