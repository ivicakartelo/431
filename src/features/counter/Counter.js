import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
 
  console.log(incrementAmount)

  return (
    <div>
      <h1>
        <span>{count}</span>
      </h1>
      <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
    </div>
  );
}