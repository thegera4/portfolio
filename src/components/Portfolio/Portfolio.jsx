import { useState, useEffect } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import './Portfolio.scss'
import {webPortfolio,mobilePortfolio} from '../../data';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setLanguage } from "../../actions/index";

function Portfolio(props) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const LIST = [
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
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
        setData(webPortfolio);
    }},[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>{t("Portfolio")}</h1>
      <ul>
        {LIST.map((item, index) => (
          <PortfolioList 
            key={index}
            title={item.title}
            selected={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            className="list-item"
            />
        ))}
      </ul>
      <div className="container">
      <Slider className="slider-wrapper">
            {data.map((slide, index) => 
              <div 
                key={index}
                className="slider-content"
                style={{ background: `url('${slide.img}') no-repeat center center`, height:1000, opacity: .7}}>
                  <div className="inner">
                    <h1>{props.language === "en" ? slide.title : slide.titulo}</h1>
                    <p>{props.language === "en" ? slide.description : slide.descripcion}</p>
                    <button onClick={()=>window.open(slide.link, '_blank')}>{props.language === "en" ? slide.button : slide.boton}</button>
                  </div>
              </div>)}
          </Slider>
      </div>
    </div>
  )
}

export function mapStateToProps(state){
  return {
    language: state.language
  };
}

export function mapDispatchToProps(dispatch){
  return {
    setLanguage: language => dispatch(setLanguage(language))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);