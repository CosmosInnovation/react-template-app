import { FC } from "react";
import { motion } from 'framer-motion';

interface FooterProps { }

export const Footer: FC<FooterProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .6 }}

      className="flex flex-co  flex-col-reverse items-center justify-center  h-full sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-200 mt-10
      sm:gap-60
      ">

      <div className="flex flex-col flex-wrap items-center justify-center sm:w-full w-[800px] bg-white-950 gap-20 p-10 xl:p-20 2xl:p-20 
        ">
        <p className="text-black  font-normal text-center text-md
        ">Learn with Cosmos</p>
      </div>
    </motion.div>
  )
}
