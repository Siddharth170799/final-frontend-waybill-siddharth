import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOTP] = useState('');
  const navigate=useNavigate()

  const handleChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Entered OTP:', otp);
    



axios.get("http://localhost:3000/check/get")
  .then((res) => {
    const data = res.data; 
    console.log(data[0].OTP);
//  const correctOTP = data.find(item => item.OTP === otp);
const correctOTP = data.find(item => item.OTP === parseInt(otp));
console.log(correctOTP)

 console.log(correctOTP)
    if (correctOTP) {
      navigate('/waybill');
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  })
  .catch((error) => {
    console.error('Error fetching OTP:', error);
    alert('Failed to fetch OTP. Please try again.');
  });



  };
  

  return (
    <>
    <div style={{textAlign:"center"}}><h2>Login</h2></div>
    <div className="container">
      <h2 style={{textAlign:"center",margin:"50px"}}>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{textAlign:"center"}}>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="number"
            id="otp"
            className="form-control"
            value={otp}
            onChange={handleChange}
          />
        </div>
        <div style={{textAlign:"center",margin:"30px"}}>
        <button type="submit" className="btn btn-primary">Verify OTP</button></div>
      </form>
    </div>
    </>
  );
};

export default OTPVerification;
