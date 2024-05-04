import React from 'react';
import Cards from './Cards';


const Features = ({details}) => {
  
console.log(details);
  return (
    <section>
      <div className='bg-visionBlue flex flex-wrap justify-center gap-5 p-12  '>
        {details.map((item, index) => (
          <div key={index} className='m-2 '> {/* Add margin to create space between cards */}
            <Cards heading={item.heading} csvg={item.csvg} content={item.content} />
          </div>
        ))}
      </div>
    </section>
  );
  
};

export default Features;
