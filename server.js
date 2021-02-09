const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

//===========
//Connectivity
//===========
const connectionString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected To Database")
        const db = client.db('tinderdb')
        const userCollection = db.collection('users')

    //===========
    //Middlewares
    //===========
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    app.use(express.json());
    

    //===========
    //Routes
    //===========

    //Root
    app.get('/', (req, res) => {
        res.status(200).send("Hello World!!!!!!!!!!!!!!!!!!")
    })

    //Get All Users
    app.get('/tinder/users', (req, res) => {
        db.collection('users')
        .find()
        .toArray()
        .then(result =>{
            res.status(200).send(result)
        })
    })

    //Create User
    app.post('/tinder/users', (req, res) => {
        userCollection.insertOne(req.body)
        .then(user => {
            res.status(200).send(user)
        })
    })

    //Delete User by Name
    app.delete('/tinder/users', (req, res) => {
        console.log(req.body.id)
        userCollection.findOneAndDelete({
            name:req.body.name
        }).then(result => {
            res.status(200).send(result);
        }).catch(error => console.error(error))
    })

    //Listen
    app.listen(8001, () => { console.log("Listening on port " + 8001) })
})
.catch(console.error)