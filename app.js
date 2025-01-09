const express= require('express');
const  getAllUsers  = require('./routes/usersRoute');
const adminLogin = require('./routes/loginRoute')

const listUsers = require('./routes/usersDbRoute')



const app= express();
const PORT= process.env.PORT ||4000


app.use(express.json())

app.use('/login',adminLogin)
app.use('/users',getAllUsers)
// app.use('/users',listUsers)

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
    
})