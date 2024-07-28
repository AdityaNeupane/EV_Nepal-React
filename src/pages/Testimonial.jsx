 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import React, { useEffect } from "react";




const testimonials = [

     {
    id: 1,
    text: " EV Nepal has been a game-changer for me. As someone who was considering switching to an electric vehicle, I found all the information I needed right here. The detailed insights, comparisons, and up-to-date pricing made my decision much easier. It's truly a one-stop solution for anyone interested in EVs in Nepal.",
    author: "Sandeep Rawal",
     
    avatar:
      "data:image/jpeg;base64,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 ",
  },
  {
    id: 2,
    text:  "I was amazed by how comprehensive and user-friendly EV Nepal is. The website offers a wealth of information about various electric vehicle models available in Nepal, along with their prices and specifications. The insights provided helped me understand the benefits of owning an electric vehicle, and the customer service was excellent when I had questions.",
    author: "Ram Prasad Sapkota",
    
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIMgQgbR4dTPlAN0rD23Ldtt5-jmQfbrd-g&s ",
  },
  {
    id: 3,
    text:  "EV Nepal stands out as the best resource for electric vehicle enthusiasts in Nepal. The site is well-organized and easy to navigate, with all the latest news and updates on EVs. The pricing section is particularly helpful, allowing me to compare different models and choose the best option within my budget. I highly recommend this site to anyone looking to buy an electric vehicle.",
    author: "Puja Neupane",
     
    avatar:
      " data:image/jpeg;base64,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",
  },
]

const settings = {
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,
};

const Testimonial = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  return (
    <>
     <div
      className="h-auto flex flex-col items-center justify-center w-full"
      id="home"
    >
      <div className="w-full md:w-[90%] h-auto md:h-[100%] rounded-md flex flex-col">
        <section className="py-12 w-full h-auto bg-background sm:py-16 lg:py-20">
          <div className="h-auto px-4 mx-auto max-w-7xl lg:px-8">
            <div className="h-auto flex flex-col items-center">
              <div className="text-center">
                <motion.h2
                  className="text-2xl p-5 pb-10 font-bold text-grey-900 sm:text-4xl xl:text-5xl"
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={controls}
                  transition={{ duration: 0.8 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                  }}
                >
                  Hear from our Clients
                </motion.h2>
              </div>
              <div className="relative mt-2 md:order-2">
                <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                  <div
                    className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter shadow-md"
                    style={{ background: "" }}
                  ></div>
                </div>
                <Slider
                  {...settings}
                  className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-1"
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex flex-col overflow-hidden shadow-md"
                    >
                      <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                        <div className="flex-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-[#FDB241]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>

                          <blockquote className="flex-1 mt-8">
                            <p className="md:text-lg text-sm leading-relaxed text-gray-900">
                              {testimonial.text}
                            </p>
                          </blockquote>
                        </div>

                        <div className="flex items-center mt-8">
                          <div className="ml-4 w-full items-center flex flex-col justify-center">
                            <img
                              className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                              src={testimonial.avatar}
                              alt={testimonial.author}
                            />
                            <p className="text-base font-bold text-gray-900">
                              {testimonial.author}
                            </p>
                            <p className="mt-0.5 text-sm text-gray-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default Testimonial
