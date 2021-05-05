import { useState } from 'react'
import FormSelection from './components/FormSelection'
import AverageDownForm from './components/AverageDownForm'
import AverageCostForm from './components/AverageCostForm'
import './App.css'

const App = () => {
  const [formSelection, setFormSelection] = useState(1)

  return (
    <div className='App'>
      <FormSelection
        defaultChecked={formSelection}
        onClick={(value) => setFormSelection(value)}
      />
      {formSelection == 1 ? <AverageDownForm /> : <AverageCostForm />}
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
