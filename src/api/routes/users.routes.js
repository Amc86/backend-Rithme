const express = require('express');
const {register, login, getAllUsers, getUser} = require('../controllers/users.controllers');
const router = express.Router();

// router.post('/register', (req, res) =>{ res.send("este es el register")})
// router.post('/login', (req, res) =>{ res.send("este es el login")})

router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.get('/:id', getUser);


module.exports = router;