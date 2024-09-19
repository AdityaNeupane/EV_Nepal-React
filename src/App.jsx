import "./App.css";
 import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Gotobrands from "./pages/Gotobrands.jsx";
import Gotoprice from "./pages/Gotoprice.jsx";
import Pricecars from "./PricesSection/Pricecars.jsx";
import Pricebikes from "./PricesSection/Pricebikes.jsx";
import Pricescooters from "./PricesSection/Pricescooters.jsx";  
import Pricevans from "./PricesSection/Pricevans.jsx";
import Carbrands from "./BrandsSection/Carbrands.jsx";
import Bikebrands from "./BrandsSection/Bikebrands.jsx";
import Scooterbrands from "./BrandsSection/Scooterbrands.jsx";
import Vanbrands from "./BrandsSection/Vanbrands.jsx";
 import Display from "./pages/Display.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Footer from "./pages/Footer.jsx";
import Info from "./pages/Info.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home"  element={<Home />}/>
         <Route path="/info" element={<Info />} />
         <Route path="/about" element={<About />}  />
         <Route path="/carbrands" element={<Carbrands />} />
         <Route path="/bikebrands" element={<Bikebrands />} />
         <Route path="/scooterbrands" element={<Scooterbrands />} />
         <Route path="/passengervanbrands" element={<Vanbrands />} />
         <Route path="/carsprice" element={<Pricecars />} />
         <Route path="/bikesprice" element={<Pricebikes />} />
         <Route path="/scootersprice" element={<Pricescooters />} />
         <Route path="/vansprice" element={<Pricevans />} />
         <Route path="/contact" element={<Footer />} />
         <Route path="/footer" element={<Footer />} />
         <Route path="/testimonial" element={<Testimonial />} />
         <Route path="/reviews" element={<Testimonial />} />
         <Route path="/newsletter" element={<Newsletter />} />

         </Routes>
         
         <Display />
         <Gotobrands />
         <Gotoprice />
          <About /> 
          
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
