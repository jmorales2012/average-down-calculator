import React, { useState } from 'react'
import './Form.css'

const AverageCostForm = () => {
  const [numShares, setNumShares] = useState(0)
  const [avgCost, setAvgCost] = useState(0)
  const [curPrice, setCurPrice] = useState(0)
  const [numSharesBuy, setNumSharesBuy] = useState(0)
  const [newAvgCost, setNewAvgCost] = useState(0)

  const CalcNewAvgCost = (numShares, avgCost, curPrice, numSharesBuy) => {
    // this function will calculate your new average cost
    const curCost = numShares * avgCost
    const newCost = numSharesBuy * curPrice
    const totalShares = numShares * 1 + numSharesBuy * 1

    console.log(curCost, newCost, totalShares)

    return (curCost + newCost) / totalShares
  }

  const onSubmit = (e) => {
    e.preventDefault()

    setNewAvgCost(CalcNewAvgCost(numShares, avgCost, curPrice, numSharesBuy))
  }

  return (
    <>
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
          <label># of Shares You're Buying</label>
          <br />
          <input
            type='text'
            required
            placeholder='# of shares you want to buy'
            onChange={(e) => setNumSharesBuy(e.target.value)}
          />
          <br />
          <input
            type='submit'
            className='btn btn-block'
            value='Calculate New Average Cost'
          />
        </div>
      </form>

      <div className='results-display'>
        <p>New Average Cost: ${newAvgCost.toFixed(2)}</p>
      </div>
    </>
  )
}

export default AverageCostForm
