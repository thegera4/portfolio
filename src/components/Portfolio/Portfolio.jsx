import { useState, useEffect } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import './Portfolio.scss'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
} from '../../data';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../languageSelect";

function Portfolio() {

  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null)
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const LIST = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    }
  ]

  useEffect(() =>{
    switch(selected){
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>{t("Portfolio")}</h1>
      <ul>
        {LIST.map(item => (
          <PortfolioList 
            title={item.title}
            selected={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
        ))}
      </ul>
      <div className="container">
          <Slider className="slider-wrapper">
            {data.map((slide, index) => 
              <div 
                key={index}
                className="slider-content"
                style={{ background: `url('${slide.img}') no-repeat center center`, height:1000 }}>
                  <div className="inner">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <button>{slide.button}</button>
                  </div>
              </div>)}
          </Slider>
      </div>
    </div>
  )
}

export default Portfolio

/*
ejemplo original
<div className="container">
            {data.map(item => (
            <motion.div 
              layoutId={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedId(item.id)}>
                <div className="item">
                  <img 
                    src={item.img} 
                    alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
            </motion.div>
            ))}
        </div>
      <AnimatePresence initial={false}>
       {selectedId && (
        <motion.div layoutId={selectedId}>
          <motion.h5>hola</motion.h5>
          <motion.h2>prueba</motion.h2>
          <motion.button onClick={() => setSelectedId(null)}>
            Close
          </motion.button>
        </motion.div>
      )}
      </AnimatePresence>
*/