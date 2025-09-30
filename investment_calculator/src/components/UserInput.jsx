import React, {useState} from 'react'
import '../App.css'

const UserInput = () => {

    const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
    });

    const validateUserInput = (val) => {
        if (val <= 0) {
            alert('Please enter only positive values!');
        }
    }

    const resetBtn = () => {
        setUserInput({
            initialInvestment: 10000,
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10
        });
    }

    const handleChange = (inputIdentifier, newValue) => {
        validateUserInput(newValue);
        
        setUserInput((prevUserInput) => (
            {
            ...prevUserInput,
            [inputIdentifier]: +newValue
            }
        ));
    }; 
  return(
    <section id='user-input'>
        <div>
            <form>
                <div className="input-group">
                    <label htmlFor="initialInvestment">Initial Investment ($)</label>
                    <input 
                    type="number" 
                    id="initialInvestment"
                    value={userInput.initialInvestment}
                    onChange={(e) => handleChange('initialInvestment', e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="annualInvestment">Annual Investment ($)</label>
                    <input 
                    type="number" 
                    id="annualInvestment"
                    value={userInput.annualInvestment}
                    onChange={(e) => handleChange('annualInvestment', e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="expectedReturn">Expected Return (%)</label>
                    <input 
                    type="number" 
                    id="expectedReturn"
                    value={userInput.expectedReturn}
                    onChange={(e) => handleChange('expectedReturn', e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="duration">Duration (years)</label>
                    <input 
                    type="number" 
                    id="duration"
                    value={userInput.duration}
                    onChange={(e) => handleChange('duration', e.target.value)}
                    />
                </div>
            </form>
            <button id='reset' onClick={() => resetBtn()}>Reset</button>
        </div>
    </section>
  ) 
}

export default UserInput