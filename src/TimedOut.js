import React, { useEffect } from 'react';
import './TimedOut.css';

function TimedOut({ session }) {
    // added timed out class to body on load.
    useEffect(() => {
        document.body.classList.add('timed-out');

        return () => {
            document.body.classList.remove('timed-out');
        }
    }, []);

    const onSubmit = () => {
        // validate password
        session.reset();
    };

    return (
        <form className="timed-out" onSubmit={onSubmit}>
            <h2 className="section-heading">Your session timed out!</h2>
            <label htmlFor="password">Re-enter password to continue</label>
            <input id="password" className="password-input"/>
            <button className="submit-password" onSubmit={() => {}} />
        </form>
    );
};

export default TimedOut;
