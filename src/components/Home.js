import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented, incrementByAmount, decrementByAmount } from '../redux/itemCount';

const Home = () => {
  const {value} = useSelector((state) => state.itemCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The count is: {value}</h1>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
      <button onClick={() => dispatch(decrementByAmount(10))}>Decrement By 10</button>
    </div>
  )
}

export default Home