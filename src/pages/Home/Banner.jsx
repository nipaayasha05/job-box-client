import React from "react";
import { motion } from "motion/react";
import nature from "../../assets/image/nature.jpg";
import tree from "../../assets/image/fress-vegatables.jpg";
const Banner = () => {
  return (
    <div className=" flex justify-center    bg-base-200 min-h-screen">
      <div className="   lg:flex lg:justify-between lg:flex-row-reverse  ">
        <div className=" ">
          <motion.img
            animate={{
              y: [0, 100, 0],

              transition: { duration: 5, repeat: Infinity },
            }}
            src={nature}
            className=" rounded-t-2xl border-s-8 border-b-8 border-amber-400 lg:w-[500px] w-[250px]  shadow-4xl   md:1/3 "
          />
          <motion.img
            animate={{
              x: [100, 150, 100],
              transition: { duration: 7, repeat: Infinity },
            }}
            src={tree}
            className=" rounded-t-2xl border-s-8 border-b-8 border-amber-400  lg:w-[500px] w-[250px]  shadow-4xl  md:1/3"
          />
        </div>
        <div className="flex justify-center items-center flex-col ">
          <motion.h1
            animate={{
              rotate: 180,
              x: 0,
              scale: -1,
              transition: { duration: 2 },
            }}
            className="text-5xl font-bold"
          >
            Box Office News!
          </motion.h1>
          {/* <motion.h1
            initial={{ scale: -1 }}
            animate={{
              scale: 2,
              x: -100,
              y: -300,
              transition: { duration: 2, repeat: Infinity },
            }}
            className="py-6"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#8c66ff", "#d9ff66", "#b3e6ff"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              jobs
            </motion.span>{" "}
            for you
          </motion.h1> */}
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
