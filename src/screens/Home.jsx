import React from "react";
import { useEffect, useState, shuffle } from "react";
import { getQuestions } from "../services/questions";
import axios from "axios";

function Home() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({incorrect_answers: []});
  const [questionNumber, setQuestionNumber] = useState(0);

  const randomize = async (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setQuestions(array);
    setCurrentQuestion(array[questionNumber])
  };

  const randomQuestions = async () => {
    const questions = await getQuestions();
    randomize(questions);
  };

  useEffect(() => {
    randomQuestions();
  }, []);

  async function handleClick() {
    setCurrentQuestion(questions[questionNumber + 1])
    if(questionNumber< questions.length-3){
      setQuestionNumber(prev => prev + 1)
    }else{
      setQuestionNumber(0)
    }
    document.querySelectorAll('.answer').forEach(element => {
      element.style.background = ''
    });
  }

  function handleAnswer(e){
    if(e.target.innerText === currentQuestion.correct_answer){
      e.target.style.background=`green`
    }else{
      e.target.style.background=`red`
    }
  }


  function showAnswers(){
    let answersArr = [...currentQuestion?.incorrect_answers, currentQuestion.correct_answer]
    let currentIndex = answersArr.length, randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [answersArr[currentIndex], answersArr[randomIndex]] = [
        answersArr[randomIndex],
        answersArr[currentIndex],
      ];
    }
    return (
      <>
        <div className="row">
          <button className="answer" onClick={handleAnswer}>{answersArr[0]}</button>
          <button className="answer" onClick={handleAnswer} >{answersArr[1]}</button>
        </div>
        <div className="row">
          <button className="answer" onClick={handleAnswer} >{answersArr[2]}</button>
          <button className="answer" onClick={handleAnswer} >{answersArr[3]}</button>
        </div>
      </>
    )
  }
 

  return (
    <>
      <h1 className="title">TRIVIA</h1>
      <div className="game">
        <div className="question" dangerouslySetInnerHTML={{__html: currentQuestion.question}}></div>
        <div className="options">
          {showAnswers()}
        </div>
      </div>
      <button className="nextButton" onClick={handleClick}>
        Next Question
      </button>
    </>
  );
}

export default Home;
