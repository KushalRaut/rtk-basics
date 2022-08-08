import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../features/counter/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const [incrementAmount, setIncrementAmount] = useState(0)

  const dispatch = useDispatch()

  return (
    <>
      <div className="app-container">
        <h1>React Counter Example</h1>
        <div className="counter-options">
          <button
            onClick={() => {
              dispatch(decrement())
            }}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              dispatch(increment())
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(reset())
          }}
        >
          Reset
        </button>
        <div>
          <input
            type="number"
            className="increment-amount"
            value={incrementAmount}
            onChange={(e) => {
              setIncrementAmount(e.target.value)
            }}
          />
          <button
            onClick={() => {
              dispatch(incrementByAmount(Number(incrementAmount)))
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  )
}

export default Counter
