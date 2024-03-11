import React from 'react'

function Home() {
  return (
    <div className="game">
          <div className="question">Question?</div>
          <div className="options">
            <div className="row">
              <button className="answer">A</button>
              <button className="answer">B</button>
            </div>
            <div className="row">
              <button className="answer">C</button>
              <button className="answer">D</button>  
            </div>
            <button className="nextButton">Next Question</button>
          </div>

        </div>
  )
}

export default Home