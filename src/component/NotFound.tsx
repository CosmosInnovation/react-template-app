import { FC } from "react";
import PageHero from "./PageHero";

interface NotFoundProps { }

export const NotFound: FC<NotFoundProps> = () => {
  return (
    <div className="flex justify-start">
      <div className="
        flex-wrap
        w-[100%]
        h-[100%]
        flex-col
        justify-center
        items-center
        gap-[60px]
        inline-flex
        2xl:w-[1260px]
        m-auto"
      >
        <PageHero subTitle="404 Not Found" />
        <div className="flex flex-col h-20" />
      </div>
    </div>)
}