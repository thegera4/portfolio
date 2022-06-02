import './Works.scss';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
        id: 1,
        title: "E-commerce",
        description: "Labore aliquip non esse deserunt Labore aliquip non esse deserunt Labore aliquip non esse deserunt",
        img: "https://www.designermill.com/wp-content/uploads/2016/05/Amazing-UI-Kit-eCommerce-Web-App.jpg"
    },
    {
        id: 2,
        title: "Relax App",
        description: "Laboris commodo mollit mollit eu nostrud voluptate sunt. Laboris commodo mollit mollit eu nostrud voluptate.",
        img: "https://muffingroup.com/blog/wp-content/uploads/2020/05/calm.jpg"
    },
    {
        id: 3,
        title: "Bank App",
        description: "Labore aliquip non esse deserunt Labore aliquip non esse deserunt Labore aliquip non esse deserunt",
        img: "https://store-images.s-microsoft.com/image/apps.35577.f15d0f85-46ea-4718-b2fe-f3c029eb49d5.9d9dc0fd-59fe-4dc0-8200-29b8fd740427.fcabd77b-4df3-40ff-a2bb-18b568d947a5"
    },
    {
        id: 4,
        title: "Banking App",
        description: "Laboris commodo mollit mollit eu nostrud voluptate sunt. Laboris commodo mollit mollit eu nostrud voluptate.",
        img: "https://meetaristo.com/images/case-studies/cbank.jpg"
    },
    {
        id: 5,
        title: "Social Media App",
        description: "Labore aliquip non esse deserunt Labore aliquip non esse deserunt Labore aliquip non esse deserunt",
        img: "https://assets-global.website-files.com/5d7f647dbda9c6ec4ecf6d36/6156d9c17594ea44a453a986_socialnetworkhero.png"
    },
    {
        id: 6,
        title: "UI Design",
        description: "Laboris commodo mollit mollit eu nostrud voluptate sunt. Laboris commodo mollit mollit eu nostrud voluptate.",
        img: "https://i.ytimg.com/vi/mYp11gGzgmQ/maxresdefault.jpg"
    },
  ];

  const handleClick = (side) =>{
    side === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5) 
    : setCurrentSlide(currentSlide < data.length - 1? currentSlide + 1 : 0) ;
  }

  return (
    <div className="works" id="works">
      <div 
      className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
       {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img 
                      src={item.img /*poner icons relacionados al proyecto*/} 
                      alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span>Projects</span>
                </div>

              </div>
              <div className="right">
                <img 
                  src="https://www.easyproject.com/EasyProject/media/images/articles/p13/f1234/New_Easy_Project_Mobile_App_Is_Here_Discover_Top_3_Features_for_Everyday_Situations.jpg?width=1920&height=0&rmode=min&quality=75&token=WySPbTcgK1%2Bo%2BkATAw2pS%2FhW8pPVAV3LfpbqXvcaS8Q%3D"
                  alt="" />
              </div>
            </div>
          </div>
       ))}
      </div>
      <ArrowBackIosNewIcon className="arrow left" onClick={() => handleClick("left")}/>
      <ArrowForwardIosIcon className="arrow right" onClick={() => handleClick("right")}/>
    </div>
  );
}

export default Works