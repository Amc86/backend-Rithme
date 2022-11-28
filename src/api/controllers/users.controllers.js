const User = require('../models/users.models');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require ('../../validators/validation');
const {generateSign, verifyJwt} =  require ('../../jwt/jwt')


const register = async (req, res, next) => {

    try {
        const newUser = new User(req.body);
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json(error) ;
    }
};

const login = async (req, res, next) => {
    try {
        console.log(req.headers.autorization)
        const userInfo = await User.findOne({email: req.body.email});

        if(!userInfo){
            return res.status(400).json({message: "invalid user"});
        }

        if(bcrypt.compareSync(req.body.password, userInfo.password)){            
            // userInfo.password = null;
            // console.log(userInfo)
            delete userInfo.password;
            console.log(userInfo)
            const token = generateSign(userInfo._id, userInfo.email)
            return res.status(200).json({token, user : userInfo}); // si no poner solo token
        } else{
            return res.status(400).json({message: "invalid password"});
        }

    } catch (error) {
        return res.status(500).json(error) ;
    }
};

const getAllUsers= async (request, response) => {
    try {
        
        const allUsers = await User.find(); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(allUsers);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getUser = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allUsers = await User.findById(id); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allUsers);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}


module.exports = {register, login, getAllUsers, getUser}