
import { useState } from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState('');
  
  return (

    <>
      <div className='text-5xl'>Password Generator</div>
    </>
  )
}

export default App
