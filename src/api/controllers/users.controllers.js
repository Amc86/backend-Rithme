const User = require('../models/users.models');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
//     try {
//         const newUser = new User(req.body);
//         const createdUser = await newUser.save();
//         return res.status(201).json(createdUser);
//     } catch (error) {
//         return res.status(500).json(error) ;
//     }
// };

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
        const userInfo = await User.findOne({email: req.body.email});

        if(!userInfo){
            return res.status(400).json({message: "invalid user"});
        }

        if(bcrypt.compareSync(req.body.password, userInfo.password)){            
            userInfo.password = null;
            console.log(userInfo)
            return res.status(200).json(userInfo);
        } else{
            return res.status(400).json({message: "invalid password"});
        }

    } catch (error) {
        return res.status(500).json(error) ;
    }
};

module.exports = {register, login}