const express = require('express')
const cors  = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//desturcter get post delete and put
const {getResorts, addResort, deleteResort, updateLikes, getComments} = require('./controller')

//setting up the end points for resorts
app.get('/getResorts', getResorts)

app.post('/addResort', addResort)

app.delete('/deleteResort/:id', deleteResort)

app.put('/updateLikes/:id', updateLikes)

//setting up end points for comment section
app.get('/getComment',getComments )

// setting this to listen on port 1317
app.listen(1317, () => {console.log('Team 7 Squad up on 1317!')})