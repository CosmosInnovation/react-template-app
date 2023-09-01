import { FC } from "react"
import { ComponentDirectionProps } from "./PropInterface"


export const Row: FC<ComponentDirectionProps> = ({ children, ...other }) => {
  return (
    <section className={`flex bg-gray-200 p-4 flex-row justify-between gap-10`} {...other}>
      { children }
    </section>)
}