import React, { useState } from 'react'
import './AverageCostForm.css'

const AverageCostForm = ({ calcBuyShares }) => {
  const [numShares, setNumShares] = useState(0)
  const [avgCost, setAvgCost] = useState(0)
  const [curPrice, setCurPrice] = useState(0)
  const [targetAvg, setTargetAvg] = useState(0)

  const CalculateSharesToBuy = (numShares, avgCost, curPrice, targetAvg) => {
    // formula to calculate target average cost:
    // buyShares = (totalCost - (targetAvg * numShares)) / (targetAvg - curPrice)
    const totalCost = numShares * avgCost
    const buyShares =
      (totalCost - targetAvg * numShares) / (targetAvg - curPrice)

    return buyShares.toFixed(2)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const buyShares = CalculateSharesToBuy(
      numShares,
      avgCost,
      curPrice,
      targetAvg
    )

    calcBuyShares(buyShares)
  }

  return (
    <form className='average-cost-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label># of Shares You Currently Own</label>
        <br />
        <input
          type='text'
          required
          placeholder='# of shares you own'
          onChange={(e) => setNumShares(e.target.value)}
        />
        <br />
        <label>Your Current Average Cost</label>
        <br />
        <input
          type='text'
          required
          placeholder='Average Cost'
          onChange={(e) => setAvgCost(e.target.value)}
        />
        <br />
        <label>Current Price of Stock</label>
        <br />
        <input
          type='text'
          required
          placeholder='Current Price'
          onChange={(e) => setCurPrice(e.target.value)}
        />
        <br />
        <label>Target Average Cost</label>
        <br />
        <input
          type='text'
          required
          placeholder='Target Average'
          onChange={(e) => setTargetAvg(e.target.value)}
        />
        <br />
        <input
          type='submit'
          className='btn btn-block'
          value='# of Shares to Buy'
        />
      </div>
    </form>
  )
}

export default AverageCostForm
