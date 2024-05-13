import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SlideShowCard from "./SlideShowCard";

const WhoBenefits = ({ slides }) => {
  return (
    <section>
      <div className='bg-visionBlue flex flex-wrap justify-center gap-5 p-12'>
        <AnimatePresence>
          {slides.map((item, index) => (
            <AnimatedSlideShowCard
              key={index}
              index={index}
              heading={item.heading}
              csvg={item.csvg}
              content={item.content}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const AnimatedSlideShowCard = ({ index, heading, csvg, content }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SlideShowCard heading={heading} csvg={csvg} content={content} />
    </motion.div>
  );
};

export default WhoBenefits;
