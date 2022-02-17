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
import WhitePaperInfoToken from './components/WhitePaperInfoToken';
import WhitePaperGamePlay from './components/WhitePaperGamePlay';
import WhitePaperCofres from "./components/WhitePaperCofres";
import WhitePaperNFTs from "./components/WhitePaperNFTs";
import WhitePaperEventos from "./components/WhitePaperEventos";
import WhitePaperEventosMixtos from './components/WhitePaperEventosMixtos';
import WhitePaperQuemaNFT from "./components/WhitePaperQuemaNFT";
import WhitePaperClaim from "./components/WhitePaperClaim";
import WhitePaperMarketPlace from "./components/WhitePaperMarketPlace";
import WhitePaperOraculo from "./components/WhitePaperOraculo";
import WhitePaperEducacion from "./components/WhitePaperEducacion";
import WhitePaperPlanesFuturos from "./components/WhitePaperPlanesFuturos";




ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>    
    
  
      
      <Routes>

        <Route path ="/" element={<App/>}/>
         

 
        <Route path='/WhitePaper/*' element={<WhitePaperApp/>}/>
        <Route path='/WhitePaper/InfoToken' element={<WhitePaperInfoToken/>}/>
        <Route path='/WhitePaper/Recompensas' element={<WhitePaperRecompensas/>}/>
        <Route path='/WhitePaper/Tokenomics' element={<WhitePaperTokenomics/>}/>
        <Route path='/WhitePaper/GamePlayW' element={<WhitePaperGamePlay/>}/>
        <Route path='/WhitePaper/Cofres' element={<WhitePaperCofres/>}/>
        <Route path='/WhitePaper/NFTs' element={<WhitePaperNFTs/>}/>
        <Route path='/WhitePaper/Eventos' element={<WhitePaperEventos/>}/>
        <Route path='/WhitePaper/EventosMixtos' element={<WhitePaperEventosMixtos/>}/>
        <Route path='/WhitePaper/QuemaNFT' element={<WhitePaperQuemaNFT/>}/>
        <Route path='/WhitePaper/Claim' element={<WhitePaperClaim/>}/>
        <Route path='/WhitePaper/MarketPlace' element={<WhitePaperMarketPlace/>}/>
        <Route path='/WhitePaper/Oraculo' element={<WhitePaperOraculo/>}/>
        <Route path='/WhitePaper/Educacion' element={<WhitePaperEducacion/>}/>
        <Route path='/WhitePaper/PlanesFuturos' element={<WhitePaperPlanesFuturos/>}/>

      </Routes>
    
  
 

  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
