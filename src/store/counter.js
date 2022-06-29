import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showDounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementby(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showDounter = !state.showDounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
