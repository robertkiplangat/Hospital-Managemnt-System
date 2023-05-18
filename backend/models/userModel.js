const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a first name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please add a last name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an E-mail'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        unique: true
    },
    role: {
        type: String,
        required: [true, 'Please add an E-mail'],
    },

}, {
    timestamps: true
})
module.exports = mongoose.model('User', userSchema) // It will automatically add an 's' to the table name