//requiring my db.json
const resorts = require('./db.json')

//requiring my db2.json
const comments = require('./db2.json')

let resortId = 4

let commentId = 4

// setting up the funtions for get, post, delete, put methods 

module.exports = {

   getResorts: (req, res) => {

    res.status(200).send(resorts)

    },
    addResort: (req,res) => {

        const {name, picture, price, discription} = req.body

        let newResort = {
            id: resortId,
            name: name,
            picture: picture,
            price: +price,
            discription: discription,
            likes: 0
        }
        resorts.push(newResort)
       
        resortId++

        res.status(200).send(resorts)
    },
    deleteResort: (req, res) => {

        const index = resorts.findIndex(element => element.id === +req.params.id)

        resorts.splice(index, 1)

        res.status(200).send(resorts)
    },
    updateLikes: (req, res) => {

        const index = resorts.findIndex(element => element.id === +req.params.id)
        const {type} = req.body

        if(type === 'like'){
            resorts[index].likes++
        }else if( type === 'dislike'){
            resorts[index].likes--
        }
        
        res.status(200).send(resorts)
        
    },

    ////////comment section

    getComments: (req, res) => {
        
        res.status(200).send(comments)
    }


}

