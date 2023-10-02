import { FC } from "react"
import { ComponentDirectionProps } from "./PropInterface"

export const Column: FC<ComponentDirectionProps> = ({ children, ...other }) => {
  return (
    <section className="flex-wrap 
        w-[100%]
        h-[100%] 
        flex-col 
        justify-center 
        items-center 
        inline-flex 
        lg:w-[50%]
        m-auto
      " {...other}>
      { children }
    </section>)
}