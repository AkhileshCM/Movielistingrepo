import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import Searchpage from './Components/Searchpage';
import Moviedetail from './Moviedetail'
import Romance from './Romance';
import Trailer from './Trailer';
import Favourites from './Favourites';
import Protected from './Protected';
import Account from './Account';
import { Context } from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/home' element={<Protected isloggedin={localStorage.getItem("log")} >
             <Maincontainer />
           </Protected>}/>
        <Route path='/details' element={<Moviedetail/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/trailer' element={<Trailer/>}/>
        <Route path='/romance' element={<Romance/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
        <Route path='/searchpage' element={<Searchpage/>}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
