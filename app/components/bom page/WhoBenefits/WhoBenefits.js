import React from "react";
import SlideShowCard from "./SlideShowCard";



const WhoBenefits = ({slides}) => {
  

  return (
    <section>
      <div className='bg-visionBlue flex flex-wrap justify-center gap-5 p-12  '>
        {slides.map((item, index) => (
          <div key={index} className='m-2 '> {/* Add margin to create space between cards */}
            <SlideShowCard heading={item.heading} csvg={item.csvg} content={item.content} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoBenefits;
