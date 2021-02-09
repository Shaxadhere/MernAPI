const express = require('express')
const bodyParser = require('body-parser')
// const MongoClient = require('mongodb').MongoClient
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json());

const usersRouter = require('./routes/users')
app.use('/tinder/users', usersRouter)


app.get('/', (req, res) => {
    res.status(200).send("Hello World!!!!!!!!!!!!!!!!!!")
})

app.listen(8001, () => {
    console.log("Listening on port " + 8001)
})


// ===========
// Connectivity
// ===========
// const connectionString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";
// MongoClient.connect(connectionString, {useUnifiedTopology: true}).then(client => {
//     console.log("Connected To Database")
//     const db = client.db('tinderdb')
//     const userCollection = db.collection('users')

//     // ===========
//     // Middlewares
//     // ===========


//     // ===========
//     // Routes
//     // ===========

//     // Root


//     // Listen
// }).catch(console.error)
