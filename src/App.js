import './App.css';
import Home from "./pages";
import Product from './pages/product';
import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/product" element={<Product />}/>
      </Routes>
    </Router>

   </>
  );
}

export default App;
