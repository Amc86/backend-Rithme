const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const { validationPassword, validationEmail } = require ('../../validators/validation');

const UsersSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

UsersSchema.pre("save", function(next){
    if(!validationEmail(this.email)){
        console.log(new Error({code: 403, message: "invalidad email"}))
        return next() 
    }
    if(!validationPassword(this.password)) {
        console.log(new Error({code: 403, message: "invalidad password"}))
        return next() 
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model('user', UsersSchema);

module.exports = User;