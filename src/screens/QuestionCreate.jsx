import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createQuestion } from '../services/questions.js';

function QuestionCreate() {
  const [question, setQuestion] = useState({
    question:"",
    correct_answer:"",
    incorrect_answer1:"",
    incorrect_answer2:"",
    incorrect_answer3:"",
  })


  return (
    <div>
      <h1 className="title">NEW QUESTION</h1>
      <form className="game">
      <input
      type="text"
      placeholder="Type your question here..."
      name="question"
      className="question"
      />
      <div className="options">
            <div className="row">
              <input 
              type="text"
              placeholder="Right Answer"
              name="correct_answer"
              className="answer"/>
              <input 
              type="text"
              placeholder="Wrong Answer #1"
              name="incorrect_answer1"
              className="answer"/>
            </div>
            <div className="row">
            <input 
              type="text"
              placeholder="Wrong Answer #2"
              name="incorrect_answer2"
              className="answer"/>
              <input 
              type="text"
              placeholder="Wrong Answer #3"
              name="incorrect_answer3"
              className="answer"/>  
            </div>
          </div>

      <div className="moreOptions">
          <button>+ Add</button>
      </div>
      </form>
      
    </div>
  )
}

export default QuestionCreate