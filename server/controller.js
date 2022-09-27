//requiring my db.json
const resorts = require('./db.json')
let resortId = 4

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
    }
}