// import { mongoose } from 'mongoose';
// import location from './eventLocation.model';
var mongoose = require('mongoose');
const location = require('./eventLocation.model');

const subEvents = mongoose.schema({ 
    subEventName: {
        type: String
    }
});

const eventManagementSchema = mongoose.Schema({ 
    eventName: {
        type:String,
        required: true
    },
    subEvents:{
        type:[subEvents],
    },
    eventLocation: {
        type:location,
    },
    eventManagerId: { 
        type:String,
    },
    userId: {
        type:String,
    },
    invitationId: { 
        type:String,
    },
    travelId: { 
        type:String,
    },
    driverId: {
        type:String,
    },
    foodManagerId: { 
        type:String,
    },
    hotelId: { 
        type:String,
    },
    eventId: {
        type:String,
    }
})

const eventManagementModel = mongoose.model('EventManagement', eventManagementSchema);
export default eventManagementModel;