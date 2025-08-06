import React, { useState } from 'react';
import './App.css';

function ComplaintRegister() {
    const [employeeName, setEmployeeName] = useState('');
    const [complaint, setComplaint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!employeeName.trim() || !complaint.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        const transactionId = Math.floor(1+Math.random() * 10000);
        alert(`Thanks ${employeeName}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`);

        setEmployeeName('');
        setComplaint('');
    };

    return (
        <div className="complaint-container">
            <h2 className="complaint-heading">Register your complaints here!!!</h2>

            <form onSubmit={handleSubmit} className="complaint-form">
                <div className="form-group">
                    <label>Name:</label><br />
                    <input
                        type="text"
                        className="complaint-input"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Complaint:</label><br />
                    <textarea
                        className="complaint-textarea"
                        rows="4"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                    />
                </div>
                <button type="submit" className="complaint-button">Submit</button>
            </form>
        </div>
    );
}

export default ComplaintRegister;