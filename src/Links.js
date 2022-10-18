import React from 'react'
import './index.css'
import {
  Link
} from "react-router-dom";

const Links = () => {
 
  const resume=()=>{
     window.open('imgs/resume.pdf'); 
     return true;
  }
  return (
    <div>
      <div id="top">
        <div className='navLinks' >
        <ul >
        <Link to={'/'}>  <li id='li1'>  <a href="#" data-text="&nbsp;Intro">&nbsp;Intro</a> </li></Link>
          <Link to={'/about'}>  <li id='li1'>  <a href="#" data-text="&nbsp;About">&nbsp;About</a> </li></Link>
          <Link to={'/projects'}> <li id='li3'>  <a href="#" data-text="&nbsp;Projects">&nbsp;Projects</a></li></Link>
          <Link to={'/contact'}> <li id='li4'>  <a href="#" data-text="&nbsp;Contact">&nbsp;Contact</a></li></Link>
           
        </ul>
        <button  className='button' id="li5" onClick={resume}>Resume</button>
        </div>
    </div>
    </div>
  )
}

export default Links
