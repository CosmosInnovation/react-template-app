import { FC } from "react";
import { motion } from 'framer-motion';

interface HeroProps { }

export const Hero: FC<HeroProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .6 }}

      className="flex flex-col-reverse items-center  justify-center  w-full  h-full sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-200 mt-10
      sm:gap-60
      ">

      <div className="flex flex-col flex-wrap justify-center items-center sm:w-full sm:h-[800px] h-[600px] w-[800px] bg-indigo-950 gap-20 p-10 xl:p-20 2xl:p-20 
        ">
        <p className={`text-white text-center sm:text-[40px] md:text-[42px] lg:text-[46px] xl:text-[48px] 2xl:text-[80px] font-bold`
        }>Empowering innovators</p>
        <p className="text-white  font-normal text-center  text-[22px]  sm:text-[22px]  md:text-[32px]  lg:text-[36px]  xl:text-[40px] 
        ">Welcome to the idea and innovation zone!</p>
      </div>
    </motion.div>
  )
}
