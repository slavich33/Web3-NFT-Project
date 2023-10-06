import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import '../node_modules/normalize.css/normalize.css'
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import "./locomotive-scroll.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


