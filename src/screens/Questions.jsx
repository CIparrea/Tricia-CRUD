import { useState, useEffect } from 'react';
import { getQuestions } from '../services/questions.js';
import { Link } from 'react-router-dom';


function Questions() {
  const [questions, setQuestions] = useState([])

  async function fetchQuestions() {
    const allQuestions = await getQuestions()
    setQuestions(allQuestions)
  }

  useEffect(()=>{
    fetchQuestions()
    console.log("useEffect")
  },[])


  return (
    <div>
      <h1 className="title">ALL QUESTIONS</h1>
      <div  className="addButton">
        <Link to={`/add-question`}>
        <button>+ Add Question</button>
        </Link>
      </div>
      <div className="showAllQuestions">
        {
          questions.map((question) => (
            <div className="game" id="allGames">
              <div className="question">{question.question}</div>
              <div className="options">
                <div className="row">
                  <div className="answer" id="rightAnswer">{question.correct_answer}</div>
                  <div className="answer" id="wrongAnswer">{question.incorrect_answers[0]}</div>
                </div>
                <div className="row">
                  <div className="answer" id="wrongAnswer">{question.incorrect_answers[1]}</div>
                  <div className="answer" id="wrongAnswer">{question.incorrect_answers[2]}</div>  
                </div>
              </div>
              <div className="moreOptions">
                <Link to={`/questions/${question._id}/edit`}>
                  <button>Edit</button>
                </Link>
              </div>
              
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Questions