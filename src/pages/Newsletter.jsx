import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0" id="contactus">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-black">
              Subscribe to our newsletter :
            </h2>
            <br></br>
            <p className="mt-2 text-gray-600">
              Join our newsletter to receive exclusive updates, insightful
              articles, the latest news on electric vehicles, and special offers
              directly to your inbox. Stay ahead in the EV world with EV Nepal!
            </p>
          </div>
          <div className="mt-10 w-full md:w-1/2 lg:mt-0">
            <form className="flex lg:justify-center">
              <div className="flex w-full max-w-md items-center space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
