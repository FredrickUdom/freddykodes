import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Profile from './PortfolioContainer/Home/Profile';

import NavBar from './PortfolioContainer/Nav-bar/NavBar';
import About from './PortfolioContainer/About/About';
import Skill from './PortfolioContainer/Skill/Skill';
import Project from './PortfolioContainer/projects/Project';
import Contact from './PortfolioContainer/ContactMe/Contact';
import FooterArea from './PortfolioContainer/Footer/Footer';





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>HELLO WORLD</h1>
     <button onClick={()=> setCount((countbb) + 1)}> click to count {countbb}
     
     </button> */}
     <NavBar/>
     <Profile/>
     <About/>
     <Skill/>
     {/* <Project/> */}
     <Contact/>
     <FooterArea/>
     
     
     
     {/* <Skill/> */}
     {/* <Footer/> */}
    
    </>
  )
}

export default App;
