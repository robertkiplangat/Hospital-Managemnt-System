import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import medicineReducer from '../features/medicines/medicineSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    medicines: medicineReducer,
  },
});
