import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Products />
        <Footer />
      </div> 
    </Router>      
  )
}

export default App