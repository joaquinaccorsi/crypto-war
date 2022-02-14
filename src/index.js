import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WhitePaperApp from './components/WhitePaperApp';

import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WhitePaperRecompensas from './components/WhitePaperRecompensas';
import WhitePaperTokenomics from './components/WhitePaperTokenomics';





ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>    
    
  
      
      <Routes>

        <Route path ="/" element={<App/>}/>
         

 
        <Route path='/WhitePaper/*' element={<WhitePaperApp/>}/>
        <Route path='/WhitePaper/Recompensas' element={<WhitePaperRecompensas/>}/>
        <Route path='/WhitePaper/Tokenomics' element={<WhitePaperTokenomics/>}/>


      </Routes>
    
  
 

  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
