// import React from 'react';
import './CardConverter.css'
import { InputGroup, Form } from 'react-bootstrap';
import React, { useState, useEffect } from "react";

function BitcoinConverter() {
  const [bitcoinAmount, setBitcoinAmount] = useState(0);
  const [usdAmount, setUSDAmount] = useState(0);
  const [bitcoinPrice, setBitcoinPrice] = useState(0);
  const [isFetchingPrice, setIsFetchingPrice] = useState(false);

  useEffect(() => {
    async function fetchBitcoinPrice() {
      setIsFetchingPrice(true);
      const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      const data = await response.json();
      setBitcoinPrice(data.bpi.USD.rate_float);
      setIsFetchingPrice(false);
    }

    fetchBitcoinPrice();
  }, []);

  const handleBitcoinChange = (event) => {
    setBitcoinAmount(event.target.value);
    setUSDAmount(event.target.value * bitcoinPrice);
  };

  const handleUSDChange = (event) => {
    setUSDAmount(event.target.value);
    setBitcoinAmount(event.target.value / bitcoinPrice);
  };

  return (
    <div>
      <div className='card-my p-3 my-3'>
         <div className='d-flex flex-column justify-content-between text-white'>
          <p className='text-white fs-5 d-block'>Bitcoin price</p>
         <div>
         {isFetchingPrice ? (
        <p>Fetching Bitcoin price...</p>
      ) : (
        <>
        <InputGroup className="mb-3 Myinput">
        <InputGroup.Text id="BTC-input" className='Myinput border-0 text-white'>
          BTC
        </InputGroup.Text>
        <Form.Control type="number" value={bitcoinAmount} onChange={handleBitcoinChange} aria-describedby="BTC-input" className='Myinput border-0'/>
     </InputGroup>
     <InputGroup className="mb-3">
        <InputGroup.Text id="USD-Input" className='Myinput border-0 text-white'>
         $ 
        </InputGroup.Text>
        <Form.Control type="number" value={usdAmount} onChange={handleUSDChange} aria-describedby="USD-Input" className='Myinput border-0'/>
     </InputGroup>
        </>
      )}
         </div>
        </div>
     </div>
      
    </div>
  );
}

export default BitcoinConverter;

// const CardConverter = (props) => {
//   return (
//     <div className='card-my p-3 my-3'>
//         <div className='d-flex flex-column justify-content-between '>
//           <p className='text-white fs-5 d-block'>Bitcoin price</p>
//           <div>
          
//           </div>
//         </div>
//     </div>
//   );
// }

// export default CardConverter;
