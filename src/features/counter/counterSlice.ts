import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    increment(state) {
      state.value++
    },

    decrement(state) {
      state.value--
    },

    incrementStep(state, action: PayloadAction<number>) {
      state.value += action.payload
    },

    decrementStep(state, action: PayloadAction<number>) {
      state.value -= action.payload
    },
  },
})

export const { increment, decrement, incrementStep, decrementStep } =
  counterSlice.actions

export default counterSlice.reducer
