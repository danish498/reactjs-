////////////////////////////
import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showDounter: true };

const counterReducers = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showDounter: state.showDounter,
    };
  }
  if (action.type === 'incrementby5') {
    return {
      counter: state.counter + action.value,
      showDounter: state.showDounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showDounter: state.showDounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showDounter: !state.showDounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducers);

// store.getState()

// const counterSubscriber = () => {
//   const latestState = store.getState();

//   console.log(latestState);
// };

// store.dispatch({ type: "increment " });
// store.dispatch({ type: "decrement" });

export default store;
