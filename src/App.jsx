import CoreValues from "./components/coreValue";
import FaqSection from "./components/FaqSection.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ReviewsSection from "./components/Reviews.jsx";
import CoreServices from "./components/services.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CoreValues />
      <CoreServices />
      <ReviewsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
