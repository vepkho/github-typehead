import React from 'react'
<<<<<<< HEAD

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home'
import Details from './pages/details/Details';


const App = () => {
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Details from './pages/details/Details';
import { useSelector } from 'react-redux';


const App = () => {

  const infoList = useSelector(state => state.info.infoList)
  console.log(infoList)

>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
  return (
    <Router>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
