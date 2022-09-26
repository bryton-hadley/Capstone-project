const express = require('express')
const cors  = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//desturcter
const {
    getAllResorts,
    addResort,
} = require('./controller')

app.get()