import React from "react";
import "./Newsletter.css";
import newsletter from "../assets/illustrations/newsletter.jpg";
const Newsletter = () => {
  return (
    <>

      <div className="newsletter">
        <h1 className="newsletter-heading">Let's Connect</h1>
        <div className="newsletter-content">
        <div className="newsletter-left">
          <img src={newsletter} alt="newsletterbg" />
        </div>
        <div className="newsletter-right">
          <h1>
            Subscribe to our newsletter :
          </h1>
         <input
          type="email" 
          id="email"
          className="newsletter-input"
          placeholder="Enter your email" />
          <button className="newsletter-button">Subscribe</button>
          <p>Join our newsletter to receive exclusive updates, insightful articles, the latest news on electric vehicles, and special offers directly to your inbox. Stay ahead in the EV world with EV Nepal.</p>
        
        </div>
</div>



        </div>
        
    </>
  );
};

export default Newsletter;
