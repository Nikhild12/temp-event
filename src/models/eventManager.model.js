// import { mongoose } from 'mongoose';
// import { Roles } from '../utils/enum/roles';

var mongoose = require('mongoose');
const Roles = require('../utils/enum/roles');

const guests = mongoose.Schema({ 
    guestId: { 
        type: String
    }
})

const eventManagementSchema = mongoose.Schema({ 
    managerName :{
        type:String,
        required:true
    },
    managerEmail :{
        type:String,
        required:true
    },
    managerContactNo :{
        type:String,
        required:true
    },
    guestList :{
        type:[guests]
    },
    eventId :{ 
        type:String,
        required:true
    },
    userId: {
        type:String,
    },
    role: {
        type: String,
        enum: [Roles.EVENT_MANAGER, Roles.GUEST],
    }
})

const eventManagementModel = mongoose.model('EventManagement', eventManagementSchema);
export default eventManagementModel;