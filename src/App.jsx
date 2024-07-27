 
import './App.css'
import Navbar from './components/Navbar.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Home from './pages/Home.jsx'
import Info from './pages/Info.jsx'
import PriceList from './pages/PriceList.jsx'
import Vehicle from './pages/Vehicle.jsx'
function App() {
   return (
    <>
    <Navbar/>
    <Home/>
    <AboutUs/>
    <Vehicle/>
    <PriceList/>
    <Info/>
    </>
   )
}

export default App

