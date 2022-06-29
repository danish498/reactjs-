import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showDounter);
  // console.log(show);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementHandlerby5 = () => {
    dispatch(counterActions.incrementby(10)); // tppe: uniqure__indentifier, payload:10
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
