const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:dGakD2MeWQprWN02@cluster0.stgq9.mongodb.net/tinderdb?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users',usersRouter)

app.listen(9000, () => {
    console.log('Server started')
})