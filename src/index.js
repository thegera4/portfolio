import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import "./components/CardTest/CardTest.scss";
import "./i18nextInit";
import { Provider } from 'react-redux';
import {store} from '../src/store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> error de compatibilidad con iTyped
  <Provider store={store}>
    <Suspense fallback="...">
      <App />
    </Suspense>
  </Provider>
  //</React.StrictMode>
);


