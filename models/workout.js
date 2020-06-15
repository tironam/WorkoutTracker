const { Schema, model } = require('mongoose')

module.exports = model('Workout', new Schema({
    day: {
        type: Date, default: () => new Date ()
    },
    exercises: [{
        type: 
        {
            type: String, 
            required: true
        },
        name: 
        {
            type: String,
            required: true
        },
        duration:
        {
            type: Number,
            required: true
        },
        weight:
        {
            type: Number
        },
        sets:
        {
            type: Number
        },
        reps:
        {
            type: Number
        },
        distance:
        {
            type: Number
        }
    }]
}))