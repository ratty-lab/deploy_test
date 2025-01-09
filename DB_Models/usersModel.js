const client = require('../client');
const {dbConnection,sql,closeDbConnection} =require('../config/db')

const getAllUsers =async()=>{
    try{
        

            await dbConnection();
            const result = await sql.query`SELECT * FROM Users`;
            return result.recordset;
        
        
    }
    catch(error){
        return error.message;
         
    }
    finally{
        await closeDbConnection()
    }


}
const getUser=async(userId)=>{
    try{
        
        await dbConnection();
        // const result = await sql.query(`SELECT * FROM Users WHERE email = ${email}`);
        const result = await sql.query`SELECT * FROM Users WHERE email = ${email}`;
        if(result.recordset.length >0)
        {
            console.log(result.recordset);
            return result.recordset;
            
            
        }
        else{
            return "User Not Found"

        }
        
        
    }
    catch(error){
        console.log(error.message);
        
    }
    finally{
        await closeDbConnection();

    }
}
const addUser=async(userData)=>{
    const {id,name,email,password}=userData
    try{

        await dbConnection();
        const result= await sql.query`INSERT INTO USERS(id,name,email,password) VALUES (${id},${name},${email},${password})`;
        const updatedData= await getAllUsers();
        await client.set('userData',JSON.stringify(updatedData,null,2))
        return "User added successfully"
        
    }
    catch(error){
        console.log(error.message);
        
    }
    finally{
        await closeDbConnection();
    }
}


module.exports = {
    getAllUsers,
    getUser,
    addUser
}
