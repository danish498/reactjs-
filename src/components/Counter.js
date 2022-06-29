import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showDounter);
  console.log(show);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const incrementHandlerby5 = () => {
    dispatch({ type: 'incrementby5', value: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment </button>
        <button onClick={incrementHandlerby5}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter </button>
    </main>
  );
};
export default Counter;
