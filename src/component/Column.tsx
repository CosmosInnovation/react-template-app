import { FC } from "react"
import { ComponentDirectionProps } from "./PropInterface"

export const Column: FC<ComponentDirectionProps> = ({ children, ...other }) => {
  return (
    <section className="flex flex-wrap p-4 column" {...other}>
      { children }
    </section>)
}