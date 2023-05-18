const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler') // because we are using mongoose and we add 'await'
const User = require('../models/userModel')
const protect = asyncHandler(async (req, res, next) => { // 'next' since this is middleware
    let token
    if(req.headers.authorization&& req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1] // comes as "bearer token"
            
            // verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET) // decode to get the id from the payload
            
            // Get user from token
            req.user = await User.findById(decoded.id).select('-password') // do not include password
            next() // to call next piece of middleware
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})
module.exports = { protect }