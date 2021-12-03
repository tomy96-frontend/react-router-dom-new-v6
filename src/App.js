import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
  <>
   <div className='HeroText'>
      <h1>My first React Router Dom page V6 version</h1>
      <hr />
    
    </div>
    <nav>
        <Link to="/Home">Home</Link> 
        <Link to="/About">About</Link>
      </nav>
  </>
  );
}

export default App;
