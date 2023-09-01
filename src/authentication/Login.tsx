import { FC } from "react";
import { motion } from 'framer-motion';

interface LoginPageProps { }

export const LoginPage: FC<LoginPageProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .6 }}
      >
      <div className="flex mt-60">
        <div className="flex flex-col h-20" />

        <div className="flex-wrap 
        w-[100%] 
        flex-col 
        gap-[40px] 
        inline-flex
        2xl:w-[600px]
        m-auto
      ">

      {/* Logo or Title */}
      <div className="text-center mb-5">
        <h1 className="text-[46px] font-bold text-indigo-950">Login</h1>
      </div>

      {/* Login Form */}
      <div className="flex flex-col flex-wrap justify-center items-center sm:w-full w-[300px] bg-white p-10 rounded-lg shadow-md">

        <input
          className="mb-4 p-4 w-full bg-white rounded border border-indigo-300 outline-none text-sm transition duration-150 ease-in-out mb-4"
          id="email"
          type="email"
          placeholder="Email Address"
        />

        <input
              className="mb-4 p-4 w-full bg-white rounded border border-indigo-300 outline-none text-sm transition duration-150 ease-in-out mb-4"
          id="password"
          type="password"
          placeholder="Password"
        />

        <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold">
          Login
        </button>

      </div>
      </div>
      </div>

    </motion.div>
  )
}
