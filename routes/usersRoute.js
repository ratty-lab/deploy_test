const express = require('express'); 
const { getAllUsers,addNewUser ,getUser} = require('../controllers/usersController');
const {validateNewUser,validateUser}= require('../middlewares/usersMiddleware')
const verifyToken = require('../middlewares/verifyToken')
const router = express.Router();

router.get('/',verifyToken,getAllUsers);
router.post('/',validateNewUser,addNewUser);
router.get("/:id",validateUser,getUser)

module.exports = router