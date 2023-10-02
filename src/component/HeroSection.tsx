import { FC } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subTitle: string;
}

const HeroSection: FC<HeroSectionProps> = ({ title, subTitle }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.1, 0.2, .01],
      scale: {
        type: "just",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
  className="flex flex-col flex-wrap items-center justify-center sm:w-full">
    <div className="flex flex-col flex-wrap items-center justify-center sm:w-full w-[800px] bg-indigo-950 p-4 xl:p-10 2xl:p-10 sm:h-[300px]">
      <h1 className="text-center text-white text-[40px] font-bold">{subTitle}</h1>
    </div>
    <div className="p-4 bg-neutral-100  top-0 right-0 rounded-br-[30px] relative justify-start">
      <p className="text-indigo-950">{title}</p>
    </div>
  </motion.div>
)

export default HeroSection;