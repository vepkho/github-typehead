import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home'
import Details from './pages/details/Details';


const App = () => {
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
