"use client";
import Circle from "../components/Circle";
import Pagewrapper from "../components/Pagewrapper";
import ServiceSlider from "../components/ServiceSlider";

import { motion } from "framer-motion";
import { fadeIn } from "@/Variants";
import Bulb from "../components/Bulb";

const page = () => {
  return (
    <Pagewrapper>
      <div className="h-screen bg-primary/30 py-36 flex items-center">
        <Circle />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit={"hidden"}
                className="h2 xl:mt-8"
              >
                My services <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit={"hidden"}
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                Lorem ipsum dolor sit, amet monsectetur adiisicing elit. A
                preveniet dignissimos distincitio tempore harum ladantum.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
              className="w-full xl:max-w-[65%]"
            >
              {/* slider */}
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </Pagewrapper>
  );
};

export default page;
