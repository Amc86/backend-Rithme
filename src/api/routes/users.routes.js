const express = require('express');
const {register, login, logout} = require('../controllers/users.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

// router.post('/register', (req, res) =>{ res.send("este es el register")})
// router.post('/login', (req, res) =>{ res.send("este es el login")})

router.post('/register', register)
router.post('/login', login)
router.post('/logout',[isAuth], logout)


module.exports = router;