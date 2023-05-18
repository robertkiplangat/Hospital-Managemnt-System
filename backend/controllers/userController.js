const path = require('path');
const dotenv = require('dotenv').config({path: '.env'}) 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler') // because we are using mongoose and we add 'await'
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body
    console.log(firstName, lastName, email, password, role)
    if (!firstName || !lastName || !email || !password || !role) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    const emailExists = await User.findOne({ email })
    if (emailExists) {
        res.status(400)
        throw new Error('User with that email already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const createUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role
    })
    if (createUser) {
        res.json({
            createUser,
            token: generateToken(createUser._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            user,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid E-mail or password')
    }
})
const getUser = asyncHandler(async (req, res) => {
    const { _id, firstName, lastName, email } = await User.findById(req.user.id) // req.user.id coming from authMiddleware.js
    res.json({
        id: _id,
        firstName,
        lastName,
        email
    })
})

// Generate JWT token
const generateToken = (id) => { // 'id' because thats what we want to put as the payload
    console.log("process.env.JWT_SECRET ", process.env.JWT_SECRET)
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    getUser,
}