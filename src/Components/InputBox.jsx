import React from 'react'
import "./InputBox.css"

function InputBox({
  label = "Null",
  amount,
  min=0,
  step=0.001,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "inr",
  readOnly = false 
}) {
  return (
    <div className='container'>
      <div className='left'>
        <label>{label}</label>
        <input type="number" placeholder="Amount" min={min} step={step} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} readOnly={readOnly} />
      </div>
      <div className='right'>
        <p>Currency Type</p>
        <select name="" id="" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox 