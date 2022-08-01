// import { mongoose } from 'mongoose';

var mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true  
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: { 
        type: Date,
        required: true
    },
    isChecked: {
        type: Boolean,
        default: false,
    },
    eventId: {
        type:String,
        required: true
    },
    userId: {
        type:String,
    },          
});

const TaskModel = mongoose.model('Task', taskSchema);
export default TaskModel;