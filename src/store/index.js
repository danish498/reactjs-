import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showDounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
