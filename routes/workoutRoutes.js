const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workout', (req, res) => {
    Workout.find()
    .then((workout) => {
        res.json(workout)
    })
        .catch(err => console.error(err))
})

router.post('/workouts', (req, res) => {
    Workout.create(req.body)
        .then(workout => res.json(workout))
        .catch(err => console.error(err))
})

router.get('workouts/:id', (req, res) => {
    
}