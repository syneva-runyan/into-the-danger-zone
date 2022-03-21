import React from 'react';
import './TimedOut.css';

function TimedOut() {
    return (
        <form className="timed-out">
            <h2 className="section-heading">Your session timed out!</h2>
            <label htmlFor="password">Re-enter password to continue</label>
            <input id="password" className="password-input"/>
            <button className="submit-password" onSubmit={() => {}} />
        </form>
    );
};

export default TimedOut;
