import React from "react";
import Image from 'next/image';
import whyLogo from '@/public/assets/whyLogo.png';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyVision = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 50% of the element is in the viewport
  });
  console.log('inView why '+inView);
  console.log('ref why '+ref);

  return (
    <section className="sm:flex flex-wrap ">
      <div className="sm:flex py-10 sm:pl-10 items-center">
        {/* left */}
        <div>
          <h1 className="text-3xl sm:text-6xl font-bold text-visionBlue sm:text-left text-center">Why choose Vista</h1>
          <div className="flex flex-wrap overflow-x-scroll sm:overflow-hidden px-20 sm:px-4">
              <ul  className="flex flex-col sm:grid gap-16 pt-16 text-xs sm:text-xl">
                <motion.li ref={ref}
                  initial={{x:-100,opacity:0}}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{duration:0.5,delay:0.2}}
                >
                  <span className="custom-span">Expertise</span> <br/>Our team has years of experience in the real estate
                  industry, providing you with the right guidance and advice.
                </motion.li>
                <motion.li ref={ref} initial={{x:-100,opacity:0}}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{duration:0.5,delay:0.4}}>
                  <span className="custom-span">Trustworthy</span><br/> We are committed to building strong relationships with
                  our clients through transparency and honesty.
                </motion.li>
                <motion.li ref={ref} initial={{x:-100,opacity:0}}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{duration:0.5,delay:0.6}}>
                  <span className="custom-span">Personalized Attention</span><br/> We provide personalized attention to every
                  client to ensure that they find the perfect property that matches
                  their needs.
                </motion.li>
              </ul>
          </div>
        </div>
        {/* right */}
        <div className="hidden sm:flex">
          <Image src={whyLogo} alt="logo"></Image>
        </div>
      </div>
    </section>
  );
};

export default WhyVision;
