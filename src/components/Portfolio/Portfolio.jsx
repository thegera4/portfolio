import { useState, useEffect } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import './Portfolio.scss'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from '../../data';

function Portfolio() {

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
            <div className="item">
              <img 
                src={item.img} 
                alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Portfolio