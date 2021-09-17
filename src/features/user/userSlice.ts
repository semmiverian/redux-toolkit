import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit'
import { IUser } from './interface'

interface UserState {
  data: IUser[]
  loading: boolean
  error: SerializedError
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: {},
}

export const fetchUser = createAsyncThunk(
  'users/fetchAll',
  async (limit: number, thunkAPI) => {
    const data = await fetch(
      `https://randomuser.me/api/?results=${limit}`
    ).then((res) => res.json())

    return data.results
  }
)

const userSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.data = []
      state.loading = false
      state.error = action.error
    })
  },
})

export default userSlice.reducer
