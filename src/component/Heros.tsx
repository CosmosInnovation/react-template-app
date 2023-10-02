import { FC } from "react";
import { motion } from 'framer-motion';
import backgroundImage from '../assets/photo-1587575494201-11fe74d90d38.avif'

interface HeroProps { }

export const Hero: FC<HeroProps> = () => {
  return (
    <div className="flex">
      <div className='w-screen h-screen overflow-hidden sm:w-auto sm:h-full'>
        <img src={backgroundImage} className='w-screen h-screen object-cover' />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .6 }}
        className="flex flex-col flex-wrap items-center justify-center sm:w-full sm:h-[800px] h-[600px] w-[800px] gap-10 p-10 xl:p-10 2xl:p-10 z-1 absolute left-0">

          <p className={`text-black text-center sm:text-[40px] md:text-[42px] lg:text-[46px] xl:text-[48px] 2xl:text-[80px] font-bold`
          }>Empowering Developers</p>
          <p className="text-black  font-normal text-center  text-[22px]  sm:text-[22px]  md:text-[32px]  lg:text-[36px]  xl:text-[40px] 
        ">The journey of a developer begins with a variable!</p>
      </motion.div >
    </div>

  )
}
