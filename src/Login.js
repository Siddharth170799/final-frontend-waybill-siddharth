import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await axios.post('http://localhost:3000/check/send-otp', { email });
      alert('OTP has been sent to your email.');
      navigate("/otp")
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  return (
    <>
    <div style={{textAlign:"center"}}><h2 >Login</h2></div>
    <div className='container'>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <label style={{ marginRight: "30px" }}>User ID</label>
        <input type='text' placeholder='enter the email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={handleClick}>Continue</button>
      </div>
    </div>
    </>
  );
};

export default Login;
