import React from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';

function App() {
  return (
    <div>
      <Header title={'Investment Calculator'} />
      <UserInput />
    </div>
  );
}

export default App;