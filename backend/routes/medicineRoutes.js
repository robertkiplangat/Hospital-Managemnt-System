const express = require('express');
const router = express.Router()
const { getMedicines,
    setMedicines,
    updateMedicines,
    deleteMedicines } = require('../controllers/medicineController');
const { protect } = require("../middleware/authMiddleware")
router.route('/').get(protect, getMedicines).post(protect, setMedicines) // chaining
router.route('/:id').put(protect, updateMedicines).delete(protect, deleteMedicines) // chaining
module.exports = router