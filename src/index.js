import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import "./components/CardTest/CardTest.scss";
import "./i18nextInit";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> error de compatibilidad con iTyped
  <Suspense fallback="...">
    <App />
    </Suspense>
  //</React.StrictMode>
);


