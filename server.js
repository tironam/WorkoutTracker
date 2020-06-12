const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(_dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./config')
    .then(() => app.listen(3000))
    .catch(err => console.error(err))