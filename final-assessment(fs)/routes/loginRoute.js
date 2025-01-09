const express = require('express'); 
const assignToken = require('../controllers/loginController');
const verifyAdmin = require('../middlewares/authmiddleware')
const router = express.Router();

router.post('/',verifyAdmin, assignToken);


module.exports = router