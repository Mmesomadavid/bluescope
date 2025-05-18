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
import Philanthropy from './pages/Philanthropy';
import OilAndGas from './pages/Oil&Gas';

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/oil-and-gas" element={<OilAndGas />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
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
