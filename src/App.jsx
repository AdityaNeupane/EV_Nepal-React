import "./App.css";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";
// import Info from './pages/Info.jsx'
import PriceListone from "./pages/PriceListone.jsx";
import Pricelisttwo from "./pages/PriceListtwo.jsx";
import PriceListthree from "./pages/PriceListthree.jsx";
import PriceListfour from "./pages/PriceListfour.jsx";
import PriceListfive from "./pages/PriceListfive.jsx";
import PriceListsix from "./pages/PriceListsix.jsx";
import PriceListseven from "./pages/PriceListseven.jsx";
import PriceListeight from "./pages/PriceListeight.jsx";
import PriceListnine from "./pages/PriceListnine.jsx";
import Vehicle from "./pages/Vehicle.jsx";
import PriceListten from "./pages/PriceListten.jsx";
import PriceListeleven from "./pages/PriceListeleven.jsx";
import PriceListtwelve from "./pages/PriceListtwelve.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Footer from "./pages/Footer.jsx";
// import ContactUs from './pages/ContactUs.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Vehicle />} />
        {/* <Route path="/" element={<PriceListone />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<Home />}/> */}
      </Routes>

      <Pricelisttwo />
      <PriceListthree />
      <PriceListfour />
      <PriceListfive />
      <PriceListsix />
      <PriceListseven />
      <PriceListeight />
      <PriceListnine />
      <PriceListten />
      <PriceListeleven />
      <PriceListtwelve />
      {/* <Info/> */}
      <Testimonial />
      <Newsletter />
      {/* <ContactUs/> */}
      <Footer />
    </Router>
  );
}

export default App;
