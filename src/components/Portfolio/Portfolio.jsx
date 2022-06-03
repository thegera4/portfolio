import { useState, useEffect } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import './Portfolio.scss'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from '../../data';
import { AnimatePresence, motion } from "framer-motion"

function Portfolio() {

  const [selectedId, setSelectedId] = useState(null)
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const LIST = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ]

  useEffect(() =>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
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
    </div>
  )
}

export default Portfolio