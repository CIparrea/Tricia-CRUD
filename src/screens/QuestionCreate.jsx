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
 
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await createQuestion({
      question: question.question,
      correct_answer: question.correct_answer,
      incorrect_answers :[
        question.incorrect_answer1,
        question.incorrect_answer2,
        question.incorrect_answer3
      ]
    })
    navigate('/questions')
  }

  const handleChange = async (e) => {
    const {name, value} = e.target

    setQuestion((prevQuestion)=> ({
      ...prevQuestion,
      [name]:value
    }))

  }

  return (
    <div>
      <h1 className="title">NEW QUESTION</h1>
      <form className="game"
      onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Type your question here..."
      name="question"
      className="question"
      value={question.question}
      onChange={handleChange}
      />
      <div className="options">
            <div className="row">
              <input 
              type="text"
              placeholder="Right Answer"
              name="correct_answer"
              className="answer"
              value={question.correct_answer}
              onChange={handleChange}
              />
              <input 
              type="text"
              placeholder="Wrong Answer #1"
              name="incorrect_answer1"
              className="answer"
              value={question.incorrect_answer1}
              onChange={handleChange}
              />
            </div>
            <div className="row">
            <input 
              type="text"
              placeholder="Wrong Answer #2"
              name="incorrect_answer2"
              className="answer"
              value={question.incorrect_answer2}
              onChange={handleChange}
              />
              <input 
              type="text"
              placeholder="Wrong Answer #3"
              name="incorrect_answer3"
              className="answer"
              value={question.incorrect_answer3}
              onChange={handleChange} 
              /> 
            </div>
          </div>
      <div className="moreOptions">
          <button type="submit">+ Add</button>
      </div>
      </form> 
    </div>
  )
}

export default QuestionCreate