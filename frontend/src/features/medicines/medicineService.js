import axios from 'axios'

const API_URL = '/api/medicines/'

// Create new medicine
const createMedicine = async (medicineData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, medicineData, config)

  return response.data
}

// Get user medicines
const getMedicines = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user medicines
const deleteMedicine = async (medicineId,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL+medicineId, config)

  return response.data
}
const medicineService = {
  createMedicine,
  getMedicines,
  deleteMedicine,
}

export default medicineService