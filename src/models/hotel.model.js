// import { mongoose } from 'mongoose';
// import { Roles } from '../utils/enum/roles';

var mongoose = require('mongoose');
const Roles = require('../utils/enum/roles');

const rooms = mongoose.Schema({ 
    roomNumber: {
        type: String
    },
    isBooked: {
        type: Boolean,
    },
    availableDates: {
        type: Date
    }
})

const availableDates = mongoose.Schema({ 
    date: {
        type: Date
    },
    roomNumber: {
        type: String
    }
})

const assignedRooms = mongoose.Schema({ 
    roomNumber: {
        type: String
    },
    guestId: {
        type: String
    },
    bookingDate: {
        type: Date
    },
    userId: {
        type:String,
    },
})

const hotelSchema = mongoose.Schema({ 
    hotelName: {
        type: String,
        required: true
    },
    rooms: {
        type: [rooms],
    },
    availableDate: {
        type: [availableDates],
    },
    assignedRooms: {
        type:[assignedRooms]
    },
    eventManagerId: {
        type: String,
    },
    eventId: {
        type: String
    },
    role: {
        type: String,
        enum: [Roles.HOTELIERS, Roles.GUEST],
    }
})

const hotelModel = mongoose.model('Hotel', hotelSchema);
export default hotelModel;