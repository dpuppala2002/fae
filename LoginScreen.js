import React, { useState } from 'react';
import './LoginScreen.css'; // Import CSS file

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [otpError, setOtpError] = useState('');

  const handlePhoneChange = (e) => {
    const inputPhoneNumber = e.target.value;
    setPhoneNumber(inputPhoneNumber);
    if (!/^\d{10}$/.test(inputPhoneNumber)) {
      setPhoneError('Phone number should be 10 digits');
    } else {
      setPhoneError('');
    }
  };

  const handleOtpChange = (e) => {
    const inputOtp = e.target.value;
    setOtp(inputOtp);
    if (!/^\d{4}$/.test(inputOtp)) {
      setOtpError('OTP should be 4 digits');
    } else {
      setOtpError('');
    }
  };

  const handleLogin = () => {
    if (!phoneError && !otpError) {
      // Implement your login logic here
      setLoggedIn(true);
    }
  };

  return (
    <div className="form-container">
      {!loggedIn ? (
        <form>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={phoneError ? 'error' : ''}
          />
          {phoneError && <div className="error-message">{phoneError}</div>}

          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleOtpChange}
            className={otpError ? 'error' : ''}
          />
          {otpError && <div className="error-message">{otpError}</div>}

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      ) : (
        <div>
          <h2>Welcome, User!</h2>
          {/* Redirect or display home screen here */}
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
