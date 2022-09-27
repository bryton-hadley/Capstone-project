const express = require('express')
const cors  = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//desturcter get post delete and put
const {getResorts, addResort} = require('./controller')

//setting up the .get end point for the resorts
app.get('/getResorts', getResorts)

//setting up the .post endpoint for the new resort
app.post('/addResort', addResort)

// setting this to listen on port 1317
app.listen(1317, () => {console.log('Team 7 Squad up on 1317!')})