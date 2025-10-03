import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import OutputData from './components/Output';
import { calculateInvestmentResults } from './util/investments';
import { generatepdf } from './util/generatereport';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 4000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const resData = calculateInvestmentResults(userInput);

  const handleGeneratePDF = () => {
    generatepdf({...userInput, results: resData});
  }

  const userInputValidation = userInput.duration >= 1;
    
  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput(prevInput => ({
      ...prevInput,
      [inputIdentifier]: +newValue
    }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange} setUserInput={setUserInput}/>
      {!userInputValidation && <p>Please ensure that the years invested are greater than 0!</p>}
      {userInputValidation && <OutputData inputValue={userInput} />}
      <div className='generate-report'>
        <button onClick={handleGeneratePDF}>Download report</button>
      </div>
    </>
  );
}

export default App;