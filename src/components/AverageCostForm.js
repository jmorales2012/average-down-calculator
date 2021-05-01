import React, { useState } from 'react'

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
    <form className='avg-cost-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label># of Shares You Currently Own</label>
        <input
          type='text'
          required
          placeholder='Enter # of shares'
          onChange={(e) => setNumShares(e.target.value)}
        />
        <br />
        <label>Current Average Cost</label>
        <input
          type='text'
          required
          placeholder='Enter Average Cost'
          onChange={(e) => setAvgCost(e.target.value)}
        />
        <br />
        <label>Current Price of Stock</label>
        <input
          type='text'
          required
          placeholder='Enter Current Price'
          onChange={(e) => setCurPrice(e.target.value)}
        />
        <br />
        <label>Target Average Cost</label>
        <input
          type='text'
          required
          placeholder='Enter Target Average'
          onChange={(e) => setTargetAvg(e.target.value)}
        />
      </div>

      <input
        type='submit'
        className='btn btn-block'
        value='Get # of Shares to Buy'
      />
    </form>
  )
}

export default AverageCostForm
