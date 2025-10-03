import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investments.js';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Label } from 'recharts';

const OutputData = ({ inputValue }) => {

  const resultData = calculateInvestmentResults(inputValue);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <section>
      <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                
                    return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                    );
                })}
            </tbody>
      </table>

      <LineChart width={600} height={500} data={resultData} backgroundColor='#f5f5f5'>
        <Line type="monotone" dataKey="valueEndOfYear" stroke="#3498db" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="year" />
        <YAxis />
        <Legend 
            layout="vertical"
            orient="vertical"
            align="left"
            verticalAlign="middle"
            iconType="circle"
            wrapperStyle={{
                borderBottom: '1px solid #d5d5d5'
            }}
        />
      </LineChart>
    </section>
  );
};

export default OutputData;