import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './src/components/NavBar';
import Footer from './src/components/Footer';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Contact from './src/pages/Contact';
import NotFound from './src/pages/NotFound';
/*
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
        <Route Component={NotFound} />
        <Footer />
      </div>
    </Router>
  );
};
*/

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route Component={NotFound} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )}

export default App;