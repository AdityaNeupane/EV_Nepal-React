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
import EMIcalc from "./pages/EMIcalc.jsx";
import Copyright from "./pages/Copyright.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Mynavbar.jsx";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div>
            <Home/>
            <Display/>
            <Gotobrands/>
            <Gotoprice/>
            <EMIcalc/>
            <About/>
            <Testimonial/>
            <Newsletter/>
            
          </div>
          
        } />
        <Route path="/Carbrands" element={<Carbrands/>}/>
        <Route path="/Bikebrands" element={<Bikebrands/>}/>
        <Route path="/Scooterbrands" element={<Scooterbrands/>}/>
        <Route path="/Vanbrands" element={<Vanbrands/>}/>
         </Routes>
          <Footer />
          <Copyright />
    </Router>
  );
};

export default App;
