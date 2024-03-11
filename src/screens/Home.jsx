import React from 'react';
import { useEffect, useState } from 'react';


function Home() {
//   useEffect(()=>{

//     console.log("Im in the home page")

//   },[])


  return (
    <>
    <h1 className="title">TRIVIA</h1>
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
          </div>
    </div>
    <button className="nextButton">Next Question</button>
    </>
  )
}

export default Home