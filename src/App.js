import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

//useeffect and usestate

import { useState, useEffect } from 'react';


function App() {
  useEffect(() =>{
    document.body.classList.add("body");
    return () =>{
      document.body.style.backgroundColor="black";
      document.body.classList.remove("few");
    }
  },[])
  return (
    <>
    <NavBar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
    </Routes>

    </>
  );
}

export default App;
