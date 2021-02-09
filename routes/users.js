const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
// const Users = require('../models/users')

const connectionString = "mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Database Name
const dbName = 'tinderdb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});



// const client = MongoClient.connect(connectionString, {useUnifiedTopology: true}).then(client => {
//     console.log("database in users connected");

//     const db = client.db('tinderdb');
//     const userCollection = db.collection(db);
//     return client
//     // Get All Users
// })

const userCollection = dbName.collection(db);
router.get('/', (req, res) => {
    db.collection('users').find().toArray().then(result => {
        res.status(200).send(result)
    })
})

// Create User
router.post('/', (req, res) => {
    userCollection.insertOne(req.body).then(user => {
        res.status(200).send(user)
    })
})

// Delete User by Name
router.delete('/', (req, res) => {
    console.log(req.body.id)
    userCollection.findOneAndDelete({_id: req.body._id}).then(result => {
        res.status(201).send(result);
    }).catch(error => console.error(error))
})
module.exports = router


// router.get('/', async (req, res) => {
//     try {
//         const users = await Users.find()
//         res.json(users)
//     } catch (err) {
//         res.send('Error ' + err)
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const users = await Users.findById(req.params.id)
//         res.json(users)
//     } catch (err) {
//         res.send('Error ' + err)
//     }
// })


// router.post('/', async (req, res) => {
//     const users = new Users({name: req.body.name})

//     try {
//         const a1 = await users.save()
//         res.json(a1)
//     } catch (err) {
//         res.send('Error')
//     }
// })

// router.patch('/:id', async (req, res) => {
//     try {
//         const users = await Users.findById(req.params.id)
//         users.sub = req.body.sub
//         const a1 = await users.save()
//         res.json(a1)
//     } catch (err) {
//         res.send('Error')
//     }

// })
