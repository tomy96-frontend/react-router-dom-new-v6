import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './routes/Home'
import About from './routes/About'
import Features from './routes/Features'
import Contact from './routes/Contact'



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);


