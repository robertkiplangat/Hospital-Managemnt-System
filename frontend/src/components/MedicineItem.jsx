import { useDispatch } from 'react-redux'
import { deleteMedicine } from '../features/medicines/medicineSlice'


function MedicineItem({ medicine }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(medicine.createdAt).toLocaleString('en-US')}</div>
      <h2>{medicine.name}</h2>
      <h2>{medicine.description}</h2>
      <button onClick={() => dispatch(deleteMedicine(medicine._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default MedicineItem