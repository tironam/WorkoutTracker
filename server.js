const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

//Route to index html file
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, './public/index.html'))
})

// Route to exercise HTML file
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, './public/exercise.html'))
})

// Route to stats html file
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stats.html'))
})

require('./config')
    .then(() => app.listen(3000))
    .catch(err => console.error(err))