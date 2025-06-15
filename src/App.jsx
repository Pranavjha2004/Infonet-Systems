import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

import NavBar from './Components/NavBar';
import ScrollProgressBar from './Components/ScrollProgressBar';
import ScrollToTopButton from './Components/ScrollToTopButton';
import FooterSection from './Components/FooterSection';

// Page Components
import HeroSection from './Components/HeroSection';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Clients from './Components/Clients';
import Testimonials from './Components/Testimonials';
import ContactUs from './Components/ContactUs';
import ServiceDetails from './Pages/ServiceDetails';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="main">
          <NavBar />
          <ScrollProgressBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutUs />
                  <Services />
                  <Clients />
                  <Testimonials />
                  <ContactUs />
                  <FooterSection />
                </>
              }
            />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
          </Routes>

          {/* Scroll to Top button on all routes */}
          <ScrollToTopButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
