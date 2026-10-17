import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const studentEmail = "haardvadodaria@gmail.com";

  return (
    <Router>
      <div className="portfolio-app">
        <div className="portfolio-container">
          {/* Universal Navigation Bar */}
          <Navbar />

          {/* Dynamic Route Switching via React Router */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home if unknown route is accessed */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Universal Footer Component */}
          <Footer email={studentEmail} />
        </div>
      </div>
    </Router>
  );
}

export default App;
