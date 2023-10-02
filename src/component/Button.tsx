import { FC } from 'react'

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  title?: string;
}

const Button: FC<ButtonProps> = ({ type, title }) => {
  return (
    <button className="w-full py-4 bg-black hover:bg-black-300 rounded text-white font-normal" type={type} >
      {title}
      </button>
      )
}

export default Button;