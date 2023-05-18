const express = require('express');
const colors = require('colors')
const path = require('path');
const dotenv = require('dotenv').config({path: '../.env'}) // have environment variables
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const app = express()
app.use(express.json()) // get input in json format
app.use(express.urlencoded({ extended: false })) // to get api input
const PORT = process.env.PORT || 8000 // access port variable in .env or not found
const cors = require('cors') // avoid problems with fetching api on localhost
connectDB()
app.use(cors());
app.use('/api/medicines', require('./routes/medicineRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
console.log(process.env.JWT_SECRET)
// npx concurrently "nodemon server" "npm start --prefix client"