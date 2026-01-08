import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <Counter />
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}

