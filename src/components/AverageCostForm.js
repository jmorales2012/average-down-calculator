import React, { useState } from 'react'

const AverageCostForm = (props) => {
  return (
    <div>
      <div className='form-control'>
        <label># of Shares You Currently Own</label>
        <input
          type='text'
          placeholder='Enter # of shares'
          onChange={(e) => props.handleNumShares(e.target.value)}
        />
        <br />
        <label>Current Average Cost</label>
        <input
          type='text'
          placeholder='Enter Average Cost'
          onChange={(e) => props.handleAvgCost(e.target.value)}
        />
        <br />
        <label>Current Price of Stock</label>
        <input
          type='text'
          placeholder='Enter Current Price'
          onChange={(e) => props.handleCurPrice(e.target.value)}
        />
        <br />
        <label>Target Average Cost</label>
        <input
          type='text'
          placeholder='Enter Target Average'
          onChange={(e) => props.handleTargetAvg(e.target.value)}
        />
      </div>
    </div>
  )
}

export default AverageCostForm
