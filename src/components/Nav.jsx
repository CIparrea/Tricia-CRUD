import { NavLink } from "react-router-dom" 

function Nav() {
  return (
    <nav className="allQuestions">
      <NavLink to="/">Play TRIVIA</NavLink>
      <NavLink to="/questions">All questions</NavLink> 
    </nav>
  )
}

export default Nav