import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewContext from './context';
import WaybillDisplay from './DisplayingWayBill';

const WaybillGenerator = () => {
 
  const [bookingType, setBookingType] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const navigate=useNavigate();

  const {input,setInput}=useContext(NewContext)
  console.log(input)


  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  

  const handleDisplayBill = () => {
    navigate('/displayprint')
  };



  return (
    

    <div className="waybill-form" style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>New Waybill Generation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookingType">Enter Registered Phone Number</label>
          <input type="text" id="bookingType" value={input} onChange={(e) => setInput(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
        </div>


        {/* <div className="form-group">
          <label>Select Account Type:</label>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }}>
            <option value="">Select</option>
            <option value="OnAccount">OnAccount</option>
            <option value="Paid">Paid</option>
            <option value="To Pay">To Pay</option>
            <option value="FOC">FOC</option>
          </select>
        </div> */}
        <div className="form-group" style={{ textAlign: 'center' }}>
          <button type="button" onClick={handleDisplayBill} style={{ marginRight: '10px' }}>Display Bill</button>
          <button type="button" onClick={handlePrintBill}>Print Bill</button>
        </div>
      </form>
    </div>


  );
};

export default WaybillGenerator;