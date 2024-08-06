import "./App.css";
// import Navbar from "./components/Navbar.jsx";
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
import Info from "./pages/Info.jsx";
// import ContactUs from './pages/ContactUs.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    |<div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home"  element={<Home />}/>
         <Route path="/info" element={<Info />} />
         <Route path="/about" element={<AboutUs />}  />
         <Route path="/vehicle" element={<Vehicle />}  />
         <Route path="/contact" element={<Footer />} />
         <Route path="/footer" element={<Footer />} />
         <Route path="/testimonial" element={<Testimonial />} />
         <Route path="/reviews" element={<Testimonial />} />
         <Route path="/newsletter" element={<Newsletter />} />

         </Routes>
         
         
         
         
         
              {/* {/* <Info /> */}
              <AboutUs />
              <Vehicle /> */
              <PriceListone />
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
              <Testimonial />
              <Newsletter />
              <br></br>
              <br></br>
              <br></br>
              <Footer />
           </div>
           
    
      
    </Router>
  );
};

export default App;
