const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()

const APP_PORT = process.env.APP_PORT
const DB_URL = process.env.DB_URL

mongoose.connect(`${DB_URL}`)
.then(()=> {
    console.log("Connected to DB")
})
const app = express()

app.use('/posts', require('./routes/postRoute'))
// app.get('/auth')

app.listen(APP_PORT, () => {
    console.log(`App started on port ${APP_PORT}`);
})