////////////////////////////
import { createStore } from 'redux';

const counterReducers = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
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
