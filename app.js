const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//Load config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT,
    console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`)
)