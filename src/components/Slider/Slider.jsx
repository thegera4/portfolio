import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import WebTemplate from "../../assets/Web/templateWeb.PNG"
import Todos from "../../assets/Web/todoList.JPG"
import Budget from "../../assets/Web/Budget.JPG"
import Weather from "../../assets/Web/WeatherApp.JPG"
import Booking from "../../assets/Web/BookingApp.JPG"
import Befos from "../../assets/Web/befos.PNG"
import tuSpacio from "../../assets/Web/tuSpacio.PNG"

const webPortfolio = [
    {
        id: 1,
        title: "tuSpacio (Group Project)",
        titulo: "tuSpacio (Proyecto Grupal)",
        img: tuSpacio,
        button: "Go to Webpage",
        boton: "Ir a la página",
        label: "This was my group project made during the Henry Bootcamp. This is a Fullstack App using PostgreSQL, Express, React, Redux and NodeJS. The deployment was made using Railway (Backend) and Vercel (Frontend). We also implemented other technologies such as: Stripe (for checkout), Auth0 (for authentication) as well as a Material UI. The admin has access to a complete dashboard for several actions related to the ecommerce.",
        descripcion: "Este fue mi proyecto grupal realizado durante el Bootcamp de Henry. Esta es un e-commerce Fullstack utilizando PostgreSQL, Express, React, Redux y NodeJS. El despliegue se realizó utilizando Railway (Backend) y Vercel (Frontend). También implementamos otras tecnologías como: Stripe (para el checkout), Auth0 (para la autenticación) así como Material UI. El administrador tiene acceso a un panel de control completo para varias acciones relacionadas con el ecommerce.",
        link: "https://tuspacio.vercel.app/"
    },
    {
        id: 2,
        title: "Befos (Individual Project)",
        titulo: "Befos (Proyecto Individual)",
        img: Befos,
        button: "Go to Webpage",
        boton: "Ir a la página",
        label: "This was my individual project made during the Henry Bootcamp. This is a Fullstack App using PostgreSQL, Express, React, Redux and NodeJS. The deployment was made using Heroku (Backend) and Vercel (Frontend).",
        descripcion: "Este fue mi proyecto individual realizado durante el Bootcamp de Henry. Esta es una aplicación Fullstack utilizando PostgreSQL, Express, React, Redux y NodeJS. El despliegue se realizó utilizando Heroku (Backend) y Vercel (Frontend).",
        link: "https://pi-dogs-main-seven.vercel.app/"
    },
    {
        id: 3,
        title: "Movies App",
        titulo: "App de películas",
       
        button: "Go to Webpage",
        boton: "Ir a la página",
        description: "Classic movies app that you build using an API (TMDB API). This app was created with React and CSS with SASS.",
        descripcion: "Esta es la clásica app de películas que se construye usando una API (TMDB API). Esta app fue creada con React y el CSS con SASS.",
        link: "https://lazynema.vercel.app/"
    },
    {
        id: 4,
        title: "Responsive Web Page Template",
        titulo: "Plantilla de página web responsiva",
        img: WebTemplate,
        button: "Go to Webpage",
        boton: "Ir a la página",
        description: "This is a simple responsive web page template built with pure html and css.",
        descripcion: "Esta es una simple plantilla de página web responsiva construida con html y css puro.",
        link: "https://responsive-web-page-template.vercel.app/"
    },
    {
        id: 5,
        title: "Todo List",
        titulo: "Lista de tareas",
        img: Todos,
        button: "Go to Webpage",
        boton: "Ir a la página",
        description: "This is the classic To Do List App made with react",
        descripcion: "Esta es la clásica app de lista de tareas construida con react",
        link: "https://todo-list-sigma-fawn.vercel.app/"
    },
    {
        id: 6,
        title: "Budget App",
        titulo: "App de presupuesto",
        img: Budget,
        button: "Go to Webpage",
        boton: "Ir a la página",
        description: "This app allows you to calculate your budget. It was created with HTML, CSS and Javascript.",
        descripcion: "Esta app te permite calcular tu presupuesto. Fue creada con HTML, CSS y Javascript.",
        link: "https://budget-app-topaz.vercel.app/"
    },
    {
        id: 7,
        title: "Weather App",
        titulo: "App de clima",
        img: Weather,
        button: "Go to Webpage",
        boton: "Ir a la página",
        description: "This is the classic weather app made with React, tailwind and using the Open Weather API.",
        descripcion: "Esta es la clásica app de clima construida con React, tailwind y usando la API de Open Weather.",
        link: "https://weather-app-murex-alpha.vercel.app/"
    },
    {
        id: 8,
        title: "Booking App",
        titulo: "App de reservas para viajes",
        img: Booking,
        button: "Go to Webpage",
        boton: "Ir a la página",
        description: "This is de UI design for a fullstack booking app that is still in development. It will use the MERN stack of technologies.",
        descripcion: "Esta es la intefaz de usuario para una app de reservas para viajes que aún está en desarrollo. Usará las tecnologías MERN.",
        link: "https://booking-ui-ten.vercel.app/"
    },
 
]


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/*const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];*/

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = webPortfolio.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{webPortfolio[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {webPortfolio.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.img}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Slider;