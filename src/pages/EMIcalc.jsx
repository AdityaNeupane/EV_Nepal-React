import React, { useState } from 'react';
import './EMIcalc.css';

const EMIcalc = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState(null);

    const calculateEMI = () => {
        const principalAmount = parseFloat(principal);
        const calculatedInterestRate = parseFloat(interestRate) / (12 * 100);
        const calculatedTenure = parseFloat(tenure);

        if (!isNaN(principalAmount) && !isNaN(calculatedInterestRate) && !isNaN(calculatedTenure)) {
            const emiAmount = (principalAmount * calculatedInterestRate * Math.pow(1 + calculatedInterestRate, calculatedTenure)) /
                (Math.pow(1 + calculatedInterestRate, calculatedTenure) - 1);
            setEmi(emiAmount.toFixed(2));
        } else {
            alert('Please enter valid numbers');
        }
    };

    return (
        <div className='EMI'>
            <h1 className='emi-heading'>Estimate Your Vehicle Financing Costs</h1>
            <h1 className='emi-heading2'> EMI Calculator : find your monthly payments.</h1>
        <div className="emi-calculator">
             
            <div className="input-container">
                <label htmlFor="principal">Principal Amount (in Rupees): </label>
                <input
                    type="number"
                    id="principal"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Enter principal amount"
                />
            </div>
            <div className="input-container">
                <label htmlFor="interestRate">Annual Interest Rate (%):</label>
                <input
                    type="number"
                    id="interestRate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="Enter interest rate"
                />
            </div>
            <div className="input-container">
                <label htmlFor="tenure">Tenure (in Months):</label>
                <input
                    type="number"
                    id="tenure"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="Enter tenure"
                />
            </div>
            <button onClick={calculateEMI} className="calculate-button">Calculate EMI</button>
            {emi !== null && (
                <div className="result">
                    <h2>Your monthly EMI will be Rs. {emi}</h2>
                </div>
            )}
        </div>
        </div>
    );
};

export default EMIcalc;