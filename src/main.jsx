import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import AboutSector71 from './pages/AboutSector71.jsx';
import Header from './components/Header.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about" element={<AboutSector71 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
