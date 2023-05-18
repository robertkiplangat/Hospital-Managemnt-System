const asyncHandler = require('express-async-handler') // needed for mongoose
const Medicine = require('../models/medicineModel')
const User = require('../models/userModel')

const getMedicines = asyncHandler(async (req, res) => {
    const medicines = await Medicine.find({ user: req.user.id })
    res.json(medicines);
})

const setMedicines = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a medicine')
    }
    const med = await Medicine.create({
        name: req.body.name,
        description: req.body.description,
        user: req.user.id
    })
    res.json(med);
})

const updateMedicines = asyncHandler(async (req, res) => {
    const med = await Medicine.findById(req.params.id)
    if (!med) {
        res.status(400)
        throw new Error('Medicine not found')
    }
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    if (med.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedMed = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // create it if it doesnt exist
    })
    res.json({ updatedMed });
})

const deleteMedicines = asyncHandler(async (req, res) => {
    const med = await Medicine.findById(req.params.id)
    if (!med) {
        res.status(400)
        throw new Error('Medicine not found')
    }
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    if (med.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    await Medicine.findByIdAndRemove(req.params.id)// no need to save cause its not going to be there
    res.json({ id: req.params.id }); // needed for the front-end
})

module.exports = {
    getMedicines,
    setMedicines,
    updateMedicines,
    deleteMedicines
}