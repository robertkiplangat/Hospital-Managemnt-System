const mongoose = require('mongoose')
const medicineSchema = mongoose.Schema({
    user:{ // know who created the entry
        type:mongoose.Schema.Types.ObjectId, // value is an ID
        required: true,
        ref:'User' // specify the database table; it will be 'users' table
    },
    name: {
        type: String,
        required: [true, 'Please add a medicine name'],
    },
    description: {
        type: String,
        required: [true, 'Please add a medicine description'],
    },
    registerDate: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Medicine', medicineSchema) // It will automatically add an 's' to the table name