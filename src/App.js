import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/FicheLogement" element={<FicheLogement />} />

        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
