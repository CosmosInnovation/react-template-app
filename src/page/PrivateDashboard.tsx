import { FC } from "react";
import PageHero from "../component/PageHero";

interface PrivateDashboardProps {

}

export const PrivateDashboardPage: FC<PrivateDashboardProps> = () => {
  return (
    <div className="flex justify-center items-center ">

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
        <PageHero title="Private Dashboard" subTitle="Private Dashboard 🎉"/>
        <div className="flex flex-col gap-4 p-10  bg-white">
          <span className="text-black text-xl font-weight-800">You are probably here by accident!</span>
        </div>
        <div className="flex flex-col h-20" />
      </div>
    </div>)
}