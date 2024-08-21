import "./App.css";
// import Navbar from "./components/Navbar.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";
// import Info from './pages/Info.jsx'
import PriceListone from "./carsPricelist/PriceListone.jsx";
import Pricelisttwo from "./carsPricelist/PriceListtwo.jsx";
import PriceListthree from "./carsPricelist/PriceListthree.jsx";
import PriceListfour from "./carsPricelist/PriceListfour.jsx";
import PriceListfive from "./carsPricelist/PriceListfive.jsx";
import PriceListsix from "./carsPricelist/PriceListsix.jsx";
import PriceListseven from "./carsPricelist/PriceListseven.jsx";
import PriceListeight from "./carsPricelist/PriceListeight.jsx";
import PriceListnine from "./carsPricelist/PriceListnine.jsx";
import Vehicle from "./pages/Vehicle.jsx";
import PriceListten from "./carsPricelist/PriceListten.jsx";
import PriceListeleven from "./carsPricelist/PriceListeleven.jsx";
import PriceListtwelve from "./carsPricelist/PriceListtwelve.jsx";
import Scotypriceone from "./scooterPricelist/Scotypriceone.jsx";
import Scotypricetwo from "./scooterPricelist/Scotypricetwo.jsx";
import Scotypricethree from "./scooterPricelist/Scotypricethree.jsx";
import Scotypricefour from "./scooterPricelist/Scotypricefour.jsx";
import Scotypricefive from "./scooterPricelist/Scotypricefive.jsx";
import Scotypricesix from "./scooterPricelist/Scotypricesix.jsx";
import Bikepriceone from "./bikePricelist/Bikepriceone.jsx";
import Bikepricetwo from "./bikePricelist/Bikepricetwo.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Footer from "./pages/Footer.jsx";
import Info from "./pages/Info.jsx";
// import ContactUs from './pages/ContactUs.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Gotobrands from './pages/Gotobrands.jsx'


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
         
         
         
         
         
         
              <Gotobrands />
              <Vehicle /> 
              
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
              <Scotypriceone />
              <Scotypricetwo />
              <Scotypricethree />
              <Scotypricefour />
              <Scotypricefive />
              <Scotypricesix />
              <Bikepriceone />
              <Bikepricetwo />
              <AboutUs />
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
