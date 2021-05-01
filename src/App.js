import { useState } from 'react'
import AverageCostForm from './components/AverageCostForm'
import ResultsDisplay from './components/ResultsDisplay'

const App = () => {
  // state to be changed from AverageCostForm
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

    return buyShares
  }

  // results passed to ResultsDisplay
  const [numSharesToBuy, setNumSharesToBuy] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'></header>
      <AverageCostForm
        handleNumShares={setNumShares}
        handleAvgCost={setAvgCost}
        handleCurPrice={setCurPrice}
        handleTargetAvg={setTargetAvg}
      />

      {numShares !== 0 && avgCost !== 0 && curPrice !== 0 && targetAvg !== 0 ? (
        <ResultsDisplay
          shares={CalculateSharesToBuy(numShares, avgCost, curPrice, targetAvg)}
        />
      ) : (
        <p>Please fill out form</p>
      )}
    </div>
  )
}

export default App

/*

Objective: 
  - This program will figure out how many shares of a stock you need
    to purchase to get a specific price average.

Inputs:
  - # of shares you currently own
  - Average cost of those shares
  - Current stock price
  - Your target average

Outputs:
  - # of shares you need to purchase at the current price
  - $ amount that purchase will cost

How:
  - Have an input component for each input (4 total)
  - Have an output component for each output (2 total)
  - Pass the data from each component back to App using callbacks
  - Compute the outputs in App
  - Then pass that data to output components using props

*/
