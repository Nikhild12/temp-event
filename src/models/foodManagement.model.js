// import { mongoose } from 'mongoose';
var mongoose = require('mongoose');
// const Roles = require('../utils/enum/roles');

const menu = mongoose.Schema({ 
    menuId :{
        type:String
    },
})

const menuByHost = mongoose.Schema({
    menuName :{
        type:String
    },
    menuDescription :{
        type:String
    },
    menuCategory :{
        type:String
    }
 })
const foodManagementSchema = mongoose.Schema({ 
    vendorName :{
        type:String,
        required:true
    },
    vendorEmail :{
        type:String,
        required:true
    },
    vendorContactNo :{
        type:String,
        required:true
    },
    menu :{
        type:[menu],
    },
    numberOfGuest :{
        type:Number
    },
    hostMenu :{
        type:[menuByHost]
    },
    eventManagerId :{
        type:String
    },
    eventId :{ 
        type:String,
        required:true
    },
    userId: {
        type:String,
    },
})

const foodManagementModel = mongoose.model('FoodManagement', foodManagementSchema);
export default foodManagementModel;