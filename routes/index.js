const router = require('express').Router()

router.use('/api', require('./workoutRoutes.js'))

module.export = router