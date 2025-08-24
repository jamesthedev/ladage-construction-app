import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';
import OurWork from './pages/OurWork';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 app-container">
      <Navbar />

      <div className="flex-grow-1 app-main" style={{ paddingTop: '72px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourwork" element={<div className="container"><OurWork /></div>} />
          <Route path="/contact" element={<div className="container"><Contact /></div>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;