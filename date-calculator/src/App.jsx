import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <Counter />
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const date = new Date();

  date.setDate(date.getDate() + count);

  return(
    <div>
      <div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <p>
        <span>{count === 0 
          ? "Today is " 
          : count > 0 
          ? `${count} days from today is ` 
          : `${Math.abs(count)} days ago was `}</span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

