import React from "react";
import "./Info.css";
import file from "../assets/illustrations/file.png";
import illustration9 from "../assets/illustrations/illustration9.png";
import battery1 from "../assets/batterypic/battery1.png";
import battery2 from "../assets/batterypic/battery2.png";
import battery3 from "../assets/batterypic/battery3.png";
import battery4 from "../assets/batterypic/battery4.png";
// import Mynavbar from "../components/Mynavbar";
// import Footer from "../pages/Footer";
import turnback from "../assets/icons/turnback.png";

import needleunderline from "../assets/underlines/needleunderline.png";
const Info = () => {
  return (
    <>
    {/* <Mynavbar /> */}
      <div className="info-section">
           <div >
           <button onClick={() => window.history.back()} >
            <img src={turnback} alt="turnback"  className="back-button1"/>
            </button>
            </div>
        <h1 className="info-heading   geologica-info">Electric Vehicles are the future of transportation. learn here why,</h1>
         <p className="contentone geologica-info">In recent years, the automotive landscape has undergone a profound transformation with the increasing prominence of electric vehicles (EVs). This shift is not merely a change in vehicle propulsion but a revolution that is reshaping the energy and utility industry. In this blog, we will delve into the EV market’s growth, its benefits, and the challenges that still need to be addressed. Moreover, this blog will explore how companies like Havis play a pivotal role in overcoming these challenges while helping energy and utility companies embrace the future of transportation.</p>
      <h1 className="topicone geologica-info">The electric vehicle market surge ;</h1>
      <p className="contenttwo geologica-info">The electric vehicle market has experienced exponential growth, marked by an accelerating shift towards sustainable and eco-friendly transportation. This surge is not just a trend but a fundamental transformation in the automotive industry that is permeating various sectors.
      
The global electric vehicle market witnessed unprecedented growth in recent years, with sales reaching record highs. This surge in electric and luxury electric cars is attributed to several factors, including government incentives, advancements in battery technology, lower operating costs, and the growing awareness of climate change. As countries worldwide set ambitious targets to reduce greenhouse gas emissions, electric cars have emerged as a critical solution to achieving these goals.

The adoption of electric cars is not limited to passenger cars; it extends the driving range to a diverse range of vehicles and electric SUVs, including buses, trucks, and utility vehicles. This broadening scope underscores the versatility and adaptability of electric vehicle technology across various industries.</p>
        
        <img src={file} alt="file"  className="illustration"/>
      
      <h1 className="topictwo geologica-info">Benefits of electric vehicles ;</h1>
      <p className="contentthree geologica-info">Transport is a fundamental requirement of modern life, but the traditional combustion engine is quickly becoming outdated. Petrol or diesel vehicles are highly polluting and are being quickly replaced by fully electric vehicles. Fully electric vehicles (EV) have zero tailpipe emissions and are much better for the environment. The electric vehicle revolution is here, and you can be part of it. Will your next vehicle be an electric one?</p>
     
     <img src={illustration9} alt="illustration9"  className="illustration9"/>
     
     <h1 className="subtopicone geologica-info">i. Lower running costs</h1>
     <p className="subtopictextone geologica-info">The running cost of an electric vehicle is much lower than an equivalent petrol or diesel vehicle. Electric vehicles use electricity to charge their batteries instead of using fossil fuels like petrol or diesel. Electric vehicles are more efficient, and that combined with the electricity cost means that charging an electric vehicle is cheaper than filling petrol or diesel for your travel requirements. Using renewable energy sources can make the use of electric vehicles more eco-friendly. The electricity cost can be reduced further if charging is done with the help of renewable energy sources installed at home, such as solar panels.</p>
     
     <h1 className="subtopictwo geologica-info">ii. Low maintenance cost </h1>
     <p className="subtopictexttwo geologica-info">Electric vehicles have very low maintenance costs because they don’t have as many moving parts as an internal combustion vehicle. The servicing requirements for electric vehicles are lesser than the conventional petrol or diesel vehicles. Therefore, the yearly cost of running an electric vehicle is significantly low.</p>

     <h1 className="subtopicthree geologica-info">iii.  Petrol and diesel use is destroying our planet </h1>
      <p className="subtopictextthree geologica-info">The availability of fossil fuels is limited, and their use is destroying our planet. Toxic emissions from petrol and diesel vehicles lead to long-term, adverse effects on public health. The emissions impact of electric vehicles is much lower than petrol or diesel vehicles. From an efficiency perspective, electric vehicles can covert around 60% of the electrical energy from the grid to power the wheels, but petrol or diesel cars can only convert 17%-21% of the energy stored in the fuel to the wheels. That is a waste of around 80%. Fully electric vehicles have zero tailpipe emissions, but even when electricity production is taken into account, petrol or diesel vehicles emit almost 3 times more carbon dioxide than the average EV. To reduce the impact of charging electric vehicles, India is ambitious to achieve about 40 percent cumulative electric power installed capacity from non-fossil fuel-based energy resources by the year 2030. Therefore, electric vehicles are the way forward for Indian transport, and we must switch to them now.</p>

      <h1 className="subtopicfour geologica-info">iv. Convenience of charging at home </h1>
      <p className="subtopictextfour geologica-info">Imagine being at a busy fuel station during peak hours, and you are getting late to reach your workplace. These problems can easily be overcome with an electric vehicle. Simply plug your vehicle in at your home charger for 4-5 hours before you plan to go. If you are able to get a charger where you park at home, it is very convenient to plan your journeys in advance. What if you forget to plug in your machine someday? Then you can easily take the help of fast chargers or even battery swapping services if you are on a two-wheeler on the road.</p>

      <h1 className="subtopicfive geologica-info">v. No noise pollution </h1>
      <p className="subtopictextfive geologica-info">Electric vehicles have the silent functioning capability as there is no engine under the hood. No engine means no noise. The electric motor functions so silently that you need to peek into your instrument panel to check if it is ON. Electric vehicles are so silent that manufacturers have to add false sounds in order to make them safe for pedestrians.</p>
<br></br>
    <h1 className="topicthree geologica-info">The future is electric - </h1>
    <p className="contentfour geologica-info">In the ever-evolving transportation landscape, electric vehicles (EVs) emerge as the transformative force poised to redefine the future. With zero emissions and breakthroughs in battery technology, EVs promise a sustainable solution to the world’s environmental challenges. Bolstered by expanding charging infrastructure and government incentives, EV adoption is surging, reshaping urban mobility and challenging traditional notions of transportation. As the momentum behind electric mobility accelerates, the dawn of a cleaner, greener era in transportation beckon.<br></br> <br></br>Overall, the narrative of an “Electric Future” is driven by the significant potential of EVs to address environmental challenges, enhance efficiency, and contribute to a more sustainable transportation landscape. However, addressing existing challenges and fostering continuous advancements are imperative to realize this vision.<br></br> <br></br>As we stand on the brink of a transportation revolution, electric vehicles offer hope for a more sustainable future. With their potential to reduce emissions, improve air quality, and drive economic growth, EVs are paving the way towards a cleaner and greener world. As technology evolves and infrastructure expands, embracing electric mobility is the key to unlocking a brighter tomorrow where transportation is efficient and environmentally responsible.</p>
<br></br>
    <h1 className="topicfour geologica-info">Batteries of an electric vehicle :</h1>

     <div className="battery">

     <img src={battery1} alt="battery1" />

     <img src={battery4} alt="battery4" />

     <img src={battery3} alt="battery3" />

     <img src={battery2} alt="battery2" />

     </div>

<p className="endnote geologica-info">" thankyou for reading the blog "</p>
<img src={needleunderline} alt="needleunderline" className="needleunderline" />
 
      </div>
{/* <Footer /> */}
    </>
  );
};

export default Info;
