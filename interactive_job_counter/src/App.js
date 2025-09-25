import React from 'react';
import { useState } from 'react';

export const AdvancedJobCounter = () => {
  const [jobCount, setJobcount] = useState(0);
  /*Ask Emmanuel if this is what was meant*/
  const [toggle, setToggle] = useState(true)
  let env;
  toggle ? env = 'Production' : env = 'UAT'
  let result;
  if (jobCount === 0) {
    result = "No jobs available";
  } else if (jobCount > 5) {
    result = "Many jobs available";
  } else {
    result = "Few jobs available";
  }

  // Implement these functions
  const handleAddJob = () => {
    setJobcount(jobCount + 1);
  };

  const handleRemoveJob = () => {
    // Remove job logic
    if (jobCount === 0) {
      handleResetJobs();
    }
    setJobcount(jobCount - 1);
  };

  const handleResetJobs = () => {
    setJobcount(0);
  };

  return (
    <div>
      <h1>Advanced Job Counter</h1>
      {/* Display current job count */}
      <p>Current Jobs: {jobCount}</p>
      
      <button onClick={handleAddJob}>Add job</button>
      <button onClick={handleRemoveJob}>Remove job</button>
      <button onClick={handleResetJobs}>Reset jobs</button>
      
      <p>{result}</p>
      <br></br>
      <hr></hr>
      <br></br>
      <p>Current environment: {env}</p>
      
      <button onClick={() => setToggle(!toggle)}>Switch env</button>
    </div>
  );
};
