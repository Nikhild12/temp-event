// import { mongoose } from 'mongoose';
var mongoose = require('mongoose');

const location = mongoose.schema({ 
    address: { 
        type: String
    },
    coordinates: {
        type: [Number]
    } 
});

export default location;