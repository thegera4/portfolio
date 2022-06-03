import './Intro.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from 'ityped';
import React from 'react';
import { motion } from "framer-motion"
import JSLogo from "../../assets/js-logo.jpg"
import HTMlLogo from "../../assets/html-logo.png"
import CSSLogo from "../../assets/css-logo.png"
import ReactLogo from "../../assets/react-logo.png"
import ReduxLogo from "../../assets/redux-logo.png"
import KotlinLogo from "../../assets/kotlin-logo.png"
import JavaLogo from "../../assets/java-logo-1.png"
import FireLogo from "../../assets/firebase-logo.png"
import PostLogo from "../../assets/postgre.png"
import SQLogo from "../../assets/SQLite_logo.png"


function Intro() {

  const variantsImg = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .3,
        duration: 3,
      }
    }
  }
  const variantsH1 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 3,
      }
    }
  }
   const variantsH2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .9,
        duration: 3,
      }
    }
  }
  const variantsH3 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 3,
      }
    }
  }

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
    <div className="one">
      <div className="left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantsImg}  >
        <img 
          className="imgContainer" 
          src ="https://avatars.githubusercontent.com/u/84020433?s=400&u=b159b95baf9fc09aeb977f93ed8c717ab583dcba&v=4" 
          alt="" />
        </motion.div>
      </div>
      <div className="right">
        <div className="wrapper">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsH2}>
            <h2>Hi there, I´m</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsH1}>
            <h1>Juan Gerardo</h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsH3}>
              <h3><span ref={textRef}></span></h3>
          </motion.div>
        </div>
        
      </div>
      <a className= "secArrow"href="#portfolio" >
            <ArrowDownwardIcon />
          </a>
      </div>
      <div className="two">
        <div className="bottomWrapper">
          <h2>About me:</h2>
          <p>Im a mechatronics engineer that is passionate about technology and learning new things.</p>
          <p>This is my personal webpage to showcase my portfolio. If you are interested in working with me,</p>
          <p>you can send me in the contact section, or you can contact me via my social media.</p>
          <br/>
          <h3>These are some of the techonologies that I have used:</h3>
          <div className="iconsWrapper">
            <div className="img">
             <img src={JSLogo} alt="Javascript" />
            </div>
            <div className="img">
              <img src={HTMlLogo} alt="Html" />
            </div>
            <div className="img">
              <img src={CSSLogo} alt="Css" />
            </div>
            <div className="img">
              <img src={ReactLogo} alt="React" />
            </div>
            <div className="img">
              <img src={ReduxLogo} alt="Redux" />
            </div>
            <div className="img">
              <img src={KotlinLogo} alt="Kotlin" />
            </div>
            <div className="img">
             <img src={JavaLogo} alt="Java" />
            </div>
            <div className="img">
             <img src={FireLogo} alt="Firebase" />
            </div>
            <div className="img">
              <img src={PostLogo} alt="Postgre SQL" />
            </div>
             <div className="img">
              <img src={SQLogo} alt="SQLite" />
            </div>
          </div>
          <a href="#portfolio" >
            <ArrowDownwardIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro