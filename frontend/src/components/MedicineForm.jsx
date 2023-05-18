import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMedicine } from '../features/medicines/medicineSlice'
function MedicineForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createMedicine({ name,description }))
        setName('')
        setDescription('')

      }
      return (
        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='text'>Name</label>
              <input
                type='text'
                name='name'
                id='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='text'>Description</label>
              <input
                type='text'
                name='description'
                id='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-block' type='submit'>
                Add Goal
              </button>
            </div>
          </form>
        </section>
      )
}

export default MedicineForm