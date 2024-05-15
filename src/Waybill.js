import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import WaybillGenerator from './DisplayBill';


const NewWaybillForm = () => {
  const [bookingType, setBookingType] = useState('');
  const [bdCode, setBdCode] = useState('');
  const [destination, setDestination] = useState('');
  const [consignorName, setConsignorName] = useState('');
  const [consignorEmail, setConsignorEmail] = useState('');
  const [consignorPhone, setConsignorPhone] = useState('');
  const [consignorAddress, setConsignorAddress] = useState('');
  const [consignorGST, setConsignorGST] = useState('');
  const [consigneeName, setConsigneeName] = useState('');
  const [consigneeEmail, setConsigneeEmail] = useState('');
  const [consigneePhone, setConsigneePhone] = useState('');
  const [consigneeAddress, setConsigneeAddress] = useState('');
  const [consigneeGST, setConsigneeGST] = useState('');
  const [numberOfArticles, setNumberOfArticles] = useState('');
  const [weight, setWeight] = useState('');
  const [consignmentValue, setConsignmentValue] = useState('');
  const [charges, setCharges] = useState('');
  const [id,setId]=useState()
 const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/check/post1",{bookingType,bdCode,destination,consignorName,consignorEmail,consignorPhone,consignorAddress,consignorGST,
        consigneeName,consigneeEmail,consigneePhone,consigneeAddress,consigneeGST,numberOfArticles,weight,consignmentValue,charges
    })
    navigate("/displaywaybill")
  };

  return (
    <>
    <div className="waybill-form" style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>New Waybill Generation</h2>
      <form onSubmit={handleSubmit}>
        {/* Booking Type, BD Code, and Destination fields */}
        <div className="form-group">
          <label htmlFor="bookingType">Booking Type:</label>
          <input type="text" id="bookingType" value={bookingType} onChange={(e) => setBookingType(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          <Dropdown style={{textAlign:"center",marginLeft:"240px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Account Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>setBookingType('OnAccount')} href="#/action-1">OnAccount</Dropdown.Item>
        <Dropdown.Item onClick={()=>setBookingType('Paid')} href="#/action-2">Paid</Dropdown.Item>
        <Dropdown.Item onClick={()=>setBookingType('To Pay')} href="#/action-3">To Pay</Dropdown.Item>
        <Dropdown.Item onClick={()=>setBookingType('FOC')} href="#/action-4">FOC</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="form-group">
          <label htmlFor="bdCode">BD Code:</label>
          <input type="text" id="bdCode" value={bdCode} onChange={(e) => setBdCode(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          <Dropdown style={{textAlign:"center",marginLeft:"240px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        BD Code(Discount Code)
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>setBdCode("BD01")} href="#/action-1">BD01</Dropdown.Item>
        <Dropdown.Item onClick={()=>setBdCode("BD02")} href="#/action-2">BD02</Dropdown.Item>
        <Dropdown.Item onClick={()=>setBdCode("BD03")} href="#/action-3">BD03</Dropdown.Item>
        <Dropdown.Item onClick={()=>setBdCode("BD04")} href="#/action-4">BD04</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" value={destination} onChange={(e) => setBdCode(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          <Dropdown style={{textAlign:"center",marginLeft:"180px"}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        List of Branches(Auto Complete)
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>setDestination("VJA")} href="#/action-1">VJA</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDestination("VSKP")} href="#/action-2">VSKP</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDestination("GNT")} href="#/action-3">GNT</Dropdown.Item>
        <Dropdown.Item onClick={()=>setDestination("KAK")} href="#/action-4">KAK</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
          {/* <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} /> */}
        </div>
        {/* Consignor Details */}
        <div className="consignor-details">
          <h3>Consignor Details</h3>
          <div className="form-group">
            <label htmlFor="consignorName">Name:</label>
            <input type="text" id="consignorName" value={consignorName} onChange={(e) => setConsignorName(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consignorEmail">Email:</label>
            <input type="email" id="consignorEmail" value={consignorEmail} onChange={(e) => setConsignorEmail(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consignorPhone">Phone Number:</label>
            <input type="text" id="consignorPhone" value={consignorPhone} onChange={(e) => setConsignorPhone(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consignorAddress">Address:</label>
            <input type="text" id="consignorAddress" value={consignorAddress} onChange={(e) => setConsignorAddress(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consignorGST">GST Number:</label>
            <input type="text" id="consignorGST" value={consignorGST} onChange={(e) => setConsignorGST(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
        </div>
        {/* Consignee Details */}
        <div className="consignee-details">
          <h3>Consignee Details</h3>
          <div className="form-group">
            <label htmlFor="consigneeName">Name:</label>
            <input type="text" id="consigneeName" value={consigneeName} onChange={(e) => setConsigneeName(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consigneeEmail">Email:</label>
            <input type="email" id="consigneeEmail" value={consigneeEmail} onChange={(e) => setConsigneeEmail(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consigneePhone">Phone Number:</label>
            <input type="text" id="consigneePhone" value={consigneePhone} onChange={(e) => setConsigneePhone(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consigneeAddress">Address:</label>
            <input type="text" id="consigneeAddress" value={consigneeAddress} onChange={(e) => setConsigneeAddress(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
          <div className="form-group">
            <label htmlFor="consigneeGST">GST Number:</label>
            <input type="text" id="consigneeGST" value={consigneeGST} onChange={(e) => setConsigneeGST(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
          </div>
        </div>
        {/* Number of Articles and Weight */}
        <div className="form-group">
          <label htmlFor="numberOfArticles">Number of Articles:</label>
          <input type="text" id="numberOfArticles" value={numberOfArticles} onChange={(e) => setNumberOfArticles(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
        </div>
        {/* Consignment Value and Charges */}
        <div className="form-group">
          <label htmlFor="consignmentValue">Total Consignment Value:</label>
          <input type="text" id="consignmentValue" value={consignmentValue} onChange={(e) => setConsignmentValue(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
        </div>
        <div className="form-group">
          <label htmlFor="charges">Charges:</label>
          <input type="text" id="charges" value={charges} onChange={(e) => setCharges(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '15px' }} />
        </div>
        {/* Submit Button */}
        <div className="form-group" style={{ textAlign: 'center' }}>
          <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </div>
      </form>
    </div>
    {/* <WaybillGenerator key1={bookingType} /> */}
    </>
  );
};

export default NewWaybillForm;
