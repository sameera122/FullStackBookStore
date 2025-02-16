import React from 'react';
import './App.css';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
   
    <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  </div>
  </>
  );
}

export default App;

