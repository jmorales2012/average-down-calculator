import { useState } from 'react'
import AverageCostForm from './components/AverageCostForm'
import ResultsDisplay from './components/ResultsDisplay'

const App = () => {
  const [buyShares, setBuyShares] = useState(0)

  // results passed to ResultsDisplay
  const [numSharesToBuy, setNumSharesToBuy] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'></header>
      <AverageCostForm calcBuyShares={(value) => setBuyShares(value)} />
      <ResultsDisplay shares={buyShares} />
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
