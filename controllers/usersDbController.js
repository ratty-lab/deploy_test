
// const client = require('../client');
// const {getAllUsers,addUser} =require('../DB_Models/usersModel')


// const getUsers=async(req,res)=>{
//     try{
        
        
//         const result = await client.get('userData');
//         if(!result){

//             const allUsersData= await getAllUsers();
//             await client.set('userData',JSON.stringify(allUsersData,null,2))
//             res.json(allUsersData);
//         }
//         else{
//             res.json(JSON.parse(result))
//         }
            
        
        
        
//     }
//     catch(error){
//         res.send(error.message);
//     }
// }
// const addNewUser= (req,res)=>{
//     const newUserData = req.body;
//     const newUser = addUser(newUserData);
//     res.json(newUser);


// }


// module.exports ={
//     getUsers,
//     addNewUser
// }