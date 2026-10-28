import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BookNow from "./pages/BookNow";
import LunawaBeach from "./pages/explore/LunawaBeach";
import BolgodaLake from "./pages/explore/BolgodaLake";
import KiralaIsland from "./pages/explore/KiralaIsland";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/book-now" element={<BookNow />} />

        <Route path="/lunawa-beach" element={<LunawaBeach />} />
        <Route path="/bolgoda-lake" element={<BolgodaLake />} />
        <Route path="/kirala-island" element={<KiralaIsland />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
