import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // redirect the user
import { useSelector, useDispatch } from 'react-redux' // grab user from state to if we are logged in
import MedicineForm from '../components/MedicineForm'
import MedicineItem from '../components/MedicineItem'
import Spinner from '../components/Spinner'
import { getMedicines, reset } from '../features/medicines/medicineSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { medicines, isLoading, isError, message } = useSelector(
    (state) => state.medicines
  )
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login') // redirect to login if not logged in
    }

    dispatch(getMedicines())

    if (isLoading) {
      return <Spinner />
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.user.firstName} {user && user.user.lastName}</h1>
        {console.log(user.user.firstName)}
        <p>Goals Dashboard</p>
      </section>
      <MedicineForm />
      <section className='content'>
        {medicines.length > 0 ? (
          <div className='goals'>
            {medicines.map((medicine) => (
              <MedicineItem key={medicine._id} medicine={medicine} />
            ))}
          </div>
        ) : (
          <h3>You have not set any medicines</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard