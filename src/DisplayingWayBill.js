
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import NewContext from './context';

const WaybillDisplay = ({
  bookingType,
  bdCode,
  destination,
  consignorName,
  consignorEmail,
  consignorPhone,
  consignorAddress,
  consignorGST,
  consigneeName,
  consigneeEmail,
  consigneePhone,
  consigneeAddress,
  consigneeGST,
  numberOfArticles,
  weight,
  consignmentValue,
  charges,
  
}) => {

    const [data,setData]=useState(null)
    const {input}=useContext(NewContext)
    console.log(input)
    
    
    


useEffect(()=>{
    axios.get("https://waybill-backend-new-siddharth.onrender.com/check/get1")
    .then((res)=>{
        const details=res.data
        console.log(details)

        const updated=details.find((item)=>item.ConsignorPhoneNumber===parseInt(input))
        setData(updated)
       
       
    
    })
},[])
console.log(data)

  return (

 <div className="waybill-display" style={{ maxWidth: '800px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center' }}>Waybill Details</h2>
     <div style={{textAlign:"center"}}><input type='number' placeholder='enter the phone number'
    //   onChange={(e)=>setInput(e.target.value)}
      
      /></div> 
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td><strong>Booking Type:</strong></td>
            <td>{data?.BookingType}</td>
          </tr>
          <tr>
            <td><strong>BD Code:</strong></td>
            <td>{data?.BDCode}</td>
          </tr>
          <tr>
            <td><strong>Destination:</strong></td>
            <td>{data?.Destination}</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', paddingTop: '10px' }}><strong>Consignor Details</strong></td>
          </tr>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{data?.ConsignorName}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{data?.ConsignerEmail}</td>
          </tr>
          <tr>
            <td><strong>Phone Number:</strong></td>
            <td>{data?.ConsignorPhoneNumber}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>{data?.ConsignorAddress}</td>
          </tr>
          <tr>
            <td><strong>GST Number:</strong></td>
            <td>{data?.ConsignorGSTNumber}</td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', paddingTop: '10px' }}><strong>Consignee Details</strong></td>
          </tr>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{data?.ConsigneeName}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{data?.ConsigneeEmail}</td>
          </tr>
          <tr>
            <td><strong>Phone Number:</strong></td>
            <td>{data?.ConsigneePhoneNumber}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>{data?.ConsigneeAddress}</td>
          </tr>
          <tr>
            <td><strong>GST Number:</strong></td>
            <td>{data?.GSTNumber}</td>
          </tr>
          <tr>
            <td><strong>Number of Articles:</strong></td>
            <td>{data?.numberOfArticles}</td>
          </tr>
          <tr>
            <td><strong>Weight:</strong></td>
            <td>{data?.Weight}</td>
          </tr>
          <tr>
            <td><strong>Consignment Value:</strong></td>
            <td>{data?.ConsignmentValue}</td>
          </tr>
          <tr>
            <td><strong>Charges:</strong></td>
            <td>{data?.Charges}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WaybillDisplay;
