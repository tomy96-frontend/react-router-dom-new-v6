import './App.css';
import {Outlet, Link } from "react-router-dom";

function App() {
  return (
  <>
   <div className='HeroText'>
      <h1>My first React Router Dom page V6 version</h1>
      <hr />
    </div>
    <nav>
        <Link to="/home">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
  </>
  );
}

export default App;
