// import { mongoose } from 'mongoose';
var mongoose = require('mongoose');

const menuManagementSchema = mongoose.Schema({ 
    menuName :{
        type:String,
        required:true
    },
    menuDescription :{
        type:String,
        required:true
    },
    menuCategory :{
        type:String,
        required:true
    },
    eventId :{
        type:String,
        required:true
    },
    eventManagerId :{
        type:String,
        required:true
    },
    userId: {
        type:String,
    },
})

const menuManagementModel = mongoose.model('MenuManagement', menuManagementSchema);
export default menuManagementModel;