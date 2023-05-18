import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import medicineService from './medicineService'

const initialState = {
    medicines: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}
// Create new medicine
export const createMedicine = createAsyncThunk(
    'medicines/create',
    async (medicineData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await medicineService.createMedicine(medicineData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
// Get user goals
export const getMedicines = createAsyncThunk(
    'medicines/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await medicineService.getMedicines(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
// Delete user medicine
export const deleteMedicine = createAsyncThunk(
    'medicines/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await medicineService.deleteMedicine(id, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const medicineSlice = createSlice({
    name: 'medicine',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMedicine.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMedicine.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.medicines.push(action.payload)
            })
            .addCase(createMedicine.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getMedicines.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMedicines.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.medicines = action.payload
            })
            .addCase(getMedicines.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteMedicine.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteMedicine.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.medicines = state.medicines.filter((medicine) => medicine._id !== action.payload.id)
            })
            .addCase(deleteMedicine.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})
export const { reset } = medicineSlice.actions
export default medicineSlice.reducer