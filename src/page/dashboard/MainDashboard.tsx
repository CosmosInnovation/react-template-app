import { FC } from "react";

interface PrivateDashboardProps {

}

export const PrivateDashboardPage: FC<PrivateDashboardProps> = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col h-20 text-center" />
      <div className="flex-wrap 
        w-[100%] 
        h-[100%] 
        flex-col 
        justify-center 
        items-center 
        gap-[60px] 
        inline-flex 
        2xl:w-[1260px]
        m-auto
      ">
        {/* <HeroSection title="Private Dashboard" subTitle="Private Dashboard 🎉"/> */}
        <div className="flex flex-col gap-4 p-10  bg-white">
          <span className="text-black text-xl font-weight-800">Let your imagination run wild here!</span>
        </div>
        <div className="flex flex-col h-20" />
        {/* <ColumnChart /> */}

      </div>
    </div>)
}