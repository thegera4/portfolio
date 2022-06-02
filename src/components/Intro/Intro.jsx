import './Intro.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from 'ityped';
import React from 'react';

function Intro() {

  const textRef = React.useRef();

  React.useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backspeed: 60,
      strings: ["Engineer", "Developer", "Freelancer"]
    })
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <img 
          className="imgContainer" 
          src ="https://avatars.githubusercontent.com/u/84020433?s=400&u=b159b95baf9fc09aeb977f93ed8c717ab583dcba&v=4" 
          alt="" />

      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I´m</h2>
          <h1>Juan Gerardo</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio" >
          <ArrowDownwardIcon />
        </a>
      </div>
    </div>
  )
}

export default Intro