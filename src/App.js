import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Button from './components/Button'
// import Form from './components/Form'
// import Header from './components/Header'
// import {Image} from './components/Image'
// import Navbar from './components/Navbar'
// import Practice from './components/Practice'
// import Product from './components/Product'
// import ProductList from './components/ProductList'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import TaskManager from "./components/TaskManager";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList/>} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
