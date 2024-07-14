import React, { useState } from 'react'
import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo.jsx"
import InputBox from './Components/InputBox.jsx'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap =()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    const rate = currencyInfo[to];
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };
  


  return (
    <div className='main-container'>
      <label htmlFor="title"><h1 className='title'>Currency Converter</h1></label>
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}>
      <div className='input-box' >
        <InputBox label='From' amount={amount} onCurrencyChange={(currency)=>{setFrom(currency)}} selectCurrency={from} currencyOptions={options} onAmountChange={(amount)=>{setAmount(amount)}}/>
      </div>
      <button className='swap' type='button' onClick={swap}>↑↓</button>
      <div className='input-box'>
        <InputBox label='To' amount={convertedAmount} onCurrencyChange={(currency)=>{setTo(currency)}} selectCurrency={to} currencyOptions={options} readOnly={true}/>
      </div>
      <button type='submit' className='convert'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
    </div>
  ) 
}

export default App
