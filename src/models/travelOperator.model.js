// import { mongoose } from 'mongoose';
// import { Roles } from '../utils/enum/roles';

var mongoose = require('mongoose');
const Roles = require('../utils/enum/roles');

const travelOperatorSchema = mongoose.Schema({ 
    operatorName: {
        type: String,
        required: true
    },
    operatorEmail: {
        type: String,
        required: true
    },
    operatorContactNo: {
        type: String,
        required: true
    },
    eventId: {
        type: String
    },
    eventManagerId: {
        type: String
    },
    userId: {
        type: String,
    },
    role: {
        type: String,
        enum: [Roles.DRIVER, Roles.GUEST,Roles.TRAVEL_OPERATOR],
    }
})

const travelOperatorModel = mongoose.model('TravelOperator', travelOperatorSchema);
export default travelOperatorModel;