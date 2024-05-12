import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import OTPVerification from './Login2';
import NewWaybillForm from './Waybill';

import 'bootstrap/dist/css/bootstrap.min.css';
import WaybillGenerator from './DisplayBill';
import WaybillDisplay from './DisplayingWayBill';
import { useState } from 'react';
import NewContext from './context';

function App() {
  const [input,setInput]=useState('')
  
  return (
      <NewContext.Provider value={{input,setInput}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/otp' element={<OTPVerification/>}/>
        <Route path="/waybill" element={<NewWaybillForm/>}/>
        <Route path='/displaywaybill' element={<WaybillGenerator/>}/>
      <Route path ='/displayprint' element={<WaybillDisplay/>}/>
       </Routes>
      </BrowserRouter>
      </NewContext.Provider>
     

  );
}

export default App;
