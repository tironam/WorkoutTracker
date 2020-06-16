const router = require('express').Router()
const { Workout } = require('../models')

// Find all workouts
router.get('/workout', (req, res) => {
    Workout.find()
    .then((workout) => {
        res.json(workout)
    })
        .catch(err => console.error(err))
})

// Post a workout
router.post('/workouts', (req, res) => {
    Workout.create(req.body)
        .then(workout => res.json(workout))
        .catch(err => console.error(err))
})

// Find one workout
router.get('workouts/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(workout => res.json(workout))
        .catch(err => console.error(err))
})

// Update a workout
router.get('/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body}})
        .then(workout => res.json(workout))
        .catch(err => console.error(err))
})

// Delete a workout 
router.get('/workout/:id', (req, res) => {
    Workout.findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err))
})