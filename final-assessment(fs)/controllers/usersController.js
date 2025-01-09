const {getUsers,addUser}= require('../models/userModel')


const getAllUsers=(req,res)=>{
    const usersData = getUsers();
    res.status(200).json(usersData);
}
const addNewUser=(req,res)=>{
    const data=req.body;
    const result = addUser(data);
    res.send(result);
    
}
const getUser=(req,res)=>{
    const user= req.user;
    res.json(user);
}


module.exports = {
    getAllUsers,
    addNewUser,
    getUser
}