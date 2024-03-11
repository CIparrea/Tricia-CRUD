import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="allQuestions">
          All questions
        </header>
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
            <button className="nextButton">Next Question</button>
          </div>

        </div>

    </div>
  );
}

export default App;
