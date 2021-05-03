import React from 'react'
import './ResultsDisplay.css'

const ResultsDisplay = ({ shares }) => {
  return (
    <div className='results-display'>
      <p># of Shares To Buy: {shares}</p>
    </div>
  )
}

export default ResultsDisplay
