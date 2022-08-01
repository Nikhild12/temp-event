// import { mongoose } from 'mongoose';
// import { Roles } from '../utils/enum/roles';

var mongoose = require('mongoose');
const Roles = require('../utils/enum/roles');

const location = mongoose.schema({ 
    pickUpAddress: { 
        type: String
    },
    pickUpCoordinates: {
        type: [Number]
    },
    dropAddress: { 
        type: String
    },
    dropCoordinates: {
        type: [Number]
    } 
});

const guestSchema = mongoose.Schema({ 
    guestName: {
        type: String,
        required: true
    },
    guestEmail: { 
        type: String,
        required: true
    },
    guestContactNo: { 
        type: String,
        required: true
    },
    guestAddress: { 
        type: [location],
        required: true
    },
    invitationId: { 
        type:String
    },
    hotelId: {
        type:String
    },
    roomId: {
        type:String
    },
    driverId: { 
        type:String
    },
    eventId: { 
        type:String,
        required: true
    },
    eventManagerId: {
        type:String,
    },
    userId: {
        type:String,
    },
    role: {
        type: String,
        enum:[
              Roles.GUEST,Roles.DRIVER, 
              Roles.TRAVEL_OPERATOR,
              Roles.EVENT_MANAGER,Roles.HOTELIERS
            ],
    }
})

const guestModel = mongoose.model('Guest', guestSchema);
export default guestModel;