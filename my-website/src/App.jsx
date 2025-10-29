// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import CADBIMService from './pages/CADBIMService';
import HRService from './pages/HRService';
import JobDetail from './pages/JobDetail'; // Add this import
import VirtualHRService from './pages/VirtualHRService';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/jobs/:jobId" element={<JobDetail />} /> {/* Add this route */}
            <Route path="/services/cad-bim" element={<CADBIMService />} />
            <Route path="/services/hr-services" element={<HRService />} />
            <Route path="/services/hr-services/virtual-hr-services" element={<VirtualHRService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;