import Nav from './components/Nav.jsx';
import Home from "./screens/Home.jsx";
import QuestionCreate from "./screens/QuestionCreate.jsx";
import QuestionDetail from "./screens/QuestionDetail.jsx";
import QuestionDelete from "./screens/QuestionDelete.jsx";
import QuestionEdit from "./screens/QuestionEdit.jsx";
import Questions from "./screens/Questions.jsx";
import { Routes, Route } from 'react-router-dom' 

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/questions" element={<Questions />}/>  
        <Route path="/questions/:id" element={<QuestionDetail />}/>  
        <Route path="/add-question" element={<QuestionCreate />}/>  
        <Route path="/questions/:id/edit" element={<QuestionEdit />}/>  
      </Routes>
    </div>
  );
}

export default App;
