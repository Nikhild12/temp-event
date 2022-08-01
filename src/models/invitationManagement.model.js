// import { mongoose } from 'mongoose';
// import location from './eventLocation.model';

var mongoose = require('mongoose');
const location = require('./eventLocation.model');

// const Roles = require('../utils/enum/roles');

const invitationManagementSchema = mongoose.Schema({ 
    guestId: { 
        type: String,
        required: true
    },
    eventLocation: {
        type: location,
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventName: {    
        type: String,
        required: true
    },
    eventManagerId: {
        type: String,
        required: true
    },
    eventId: {
        type: String,
        required: true
    },
    isAccepted: {
        type: Boolean,
        default: false
    }
})

const invitationManagementModel = mongoose.model('InvitationManagement', invitationManagementSchema);
export default invitationManagementModel;