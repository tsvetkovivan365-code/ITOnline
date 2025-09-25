import React from 'react';

 const JobBoard = () => {
  const companyName = "TechCorp";
  const jobCount = Math.random() > 0.5 ? Math.floor(Math.random() * 100) : 0; // You can change this value to test different scenarios
	
  const getJobMessage = () => {
  // Implement this function
  // If jobCount is 0, return "No jobs to schedule today"
  // Otherwise, return "Jobs running today from bot: {jobCount}"
    if (jobCount === 0) {
        return "No jobs to schedule today";
    } else if (jobCount > 0 && jobCount <= 5) {
        return `Few jobs running today from bot: ${jobCount}`
    } else {
        return ` Quite a lot of jobs running today from bot: ${jobCount}`
    }
  }

  const expectedJobsNextWeek = () => {
    const expectedJobs = jobCount * 1.5;
    return `Expected jobs for next week: ${expectedJobs}`
  }

 return (
  <div style={{textAlign: 'center', fontSize: '200%'}}>
   <h1>{companyName}</h1>
   <p>{getJobMessage()}</p>
   <p>{expectedJobsNextWeek()}</p>
  </div>
 );
}

export default JobBoard;