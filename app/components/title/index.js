import React from 'react'
import { motion } from 'framer-motion'

const Title = ({mainHeading}) => {
  return (
    <motion.div
        className="bg-visionGold relative overflow-hidden"
        initial={{ width: 0, opacity: 0 }} // Initial width (revealed from left) and opacity (invisible)
        animate={{ width: "100%", opacity: 1 }} // Final width (fully revealed) and opacity (visible)
        transition={{ duration: 1, delay: 2, ease: "easeInOut" }} // Animation duration, delay, and ease
      >
        <div className="text-4xl sm:text-6xl text-visionBlue text-center tracking-wider py-3">
          <motion.div
            initial={{ scale: 10, opacity: 0 }} // Initial scale (larger size)
            animate={{ scale: 1, opacity: 1 }} // Final scale (original size)
            transition={{ duration: 0.2, delay: 3, ease: "easeInOut" }} // Animation duration and delay
            className='font-inter'
          >
            {mainHeading}
          </motion.div>
        </div>
      </motion.div>
  )
}

export default Title