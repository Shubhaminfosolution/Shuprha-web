import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ServicesPage from "./pages/ServicesPage";
import WhyUs from "./pages/WhyUs";
import ContactButton from "./pages/Contactbutton";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import DigitalMarketing from "./pages/DigitalMarketing";
import Branding from "./pages/Branding";
import SocialMedia from "./pages/SocialMedia";
import SEO from "./pages/SEO";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

import Businesses from "./pages/Businesses";
import BusinessProfile from "./pages/BusinessProfile";

import ScrollToTop from "./components/ScrollToTop";


// ✅ HOME PAGE
const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
};


function App() {
  return (
    <Router>

      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-background text-foreground">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className="flex-1">

          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* SERVICES */}
            <Route
              path="/digital-marketing"
              element={<DigitalMarketing />}
            />

            <Route
              path="/branding"
              element={<Branding />}
            />

            <Route
              path="/social-media"
              element={<SocialMedia />}
            />

            <Route
              path="/SEO"
              element={<SEO />}
            />

            {/* MAIN PAGES */}
            <Route
              path="/services"
              element={<ServicesPage />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/why-us"
              element={<WhyUs />}
            />

            <Route
              path="/contact"
              element={<ContactButton />}
            />

            {/* BUSINESS PAGES */}
            <Route
              path="/businesses"
              element={<Businesses />}
            />

            <Route
              path="/business/:id"
              element={<BusinessProfile />}
            />

            {/* POLICIES */}
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/terms-of-service"
              element={<Terms />}
            />

            <Route
              path="/cookie-policy"
              element={<Cookies />}
            />

          </Routes>

        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </Router>
  );
}

export default App;