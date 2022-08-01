// import { mongoose } from 'mongoose';
// import { Roles } from '../utils/enum/roles';
var mongoose = require('mongoose');
const Roles = require('../utils/enum/roles');

const guests = mongoose.Schema({
    guestId: {
        type: String
    }
})

const driverSchema = mongoose.Schema({ 
    driverName :{
        type:String,
        required:true
    },
    driverEmail :{
        type:String,
        required:true
    },
    driverContactNo :{
        type:String,
        required:true
    },
    vehicleNumber :{
        type:String,
    },
    guestList :{
        type:[guests]
    },  
    eventId :{
        type:String
    },
    eventManagerId :{
        type:String
    },
    userId: {
        type:String,
    },
    role: {
        type: String,
        enum: [Roles.DRIVER, Roles.GUEST,Roles.TRAVEL_OPERATOR]
    }
})

const driverModel = mongoose.model('Driver', driverSchema);
export default driverModel;