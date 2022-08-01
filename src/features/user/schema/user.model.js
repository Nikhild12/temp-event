// import { monogoose } from 'mongoose';
// import { Roles } from '../utils/enum/roles';

var mongoose = require('mongoose');
const Roles = require('../utils/enum/roles');

const userSchema = monogoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum:[Roles.HOST,Roles.ADMIN]
    }
});

const UserModel = monogoose.model('User', userSchema);
export default UserModel;