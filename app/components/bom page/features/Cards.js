import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';

const Cards = ({ heading, csvg, content }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: -45, opacity: 0 }}
      animate={inView ? { rotate: 0, opacity: 1 } : { rotate: -45, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5,delay:0.2 }}
        className='w-[300px] h-[250px] bg-white p-5 rounded-lg'
      >
        {/* card heading */}
        <div className='text-visionGold text-left font-semibold text-2xl py-5'>
          {heading}
        </div>
        {/* card svg */}
        {/* <div>
            <img src={csvg} alt='club house'/>
        </div> */}
        {/* card content */}
        <div className='text-sm sm:text-base font-inter'>{content}</div>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
