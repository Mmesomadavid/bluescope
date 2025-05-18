import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AnnualReport from './pages/AnnualReport';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Support from './pages/Support';

// Auth Pages
import Login from './pages/Auth/Login';
import Signup from './pages/Signup';
import Mining from './pages/Mining';
import Agriculture from './pages/Agriculture';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Mining />} />
        <Route path="/projects" element={<Agriculture />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/support" element={<Support />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
