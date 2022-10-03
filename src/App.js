import React, { Fragment } from 'react'
import './App.css';
import Home from './components/Home'
import Detail from './components/Detail'
import Video from './components/Video'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path = '/' element = {<Home/>} />
          <Route path = 'detail' element = {<Detail />} />
          <Route path = 'play' element = {<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
