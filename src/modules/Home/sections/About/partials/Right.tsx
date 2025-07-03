
import { motion } from 'framer-motion'
import React from 'react'
//
import { fadeLeft, motionStep } from '@config/motion'


const Right = () => {
  return (
    <motion.div variants={fadeLeft} {...motionStep} className='cols-span-2 lg:block hidden' >
      <div className='w-[300px] h-[350px] relative group rounded-xl' >
         <img
            src='https://github.com/Tanishkagimhan/portfolio-3/blob/main/public/images/model/raihanhosen.jpg?raw=true'  
            className='rounded-xl z-40 transition-all duration-200 group-hover:translate-y-[2px] group-hover:translate-x-[2px]'
            alt='loading...' 
         />
         
         
      </div> 
    </motion.div>
  )
}

export default Right