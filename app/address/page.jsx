"use client";
import { fadeIn } from "@/Variants";
import Pagewrapper from "../components/Pagewrapper";
import TestimonialSlider from "../components/TestimonialSlider";
import { motion } from "framer-motion";

const page = () => {
  return (
    <Pagewrapper>
      <div className="h-full bg-primary/30 py-32 text-center ">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* title */}
          <motion.h2
            className="h2 mb-8 xl:mb-0"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            here
            <span className="text-accent"> contact.</span>
          </motion.h2>
          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex  flex-col items-center md:py-8">
            <div className="space-y-5 px-10 py-2 md:py-4 border-2 rounded-md">

            <div className="flex items-start flex-col">
              <h2 className="font-semibold font-poppins text-xl">Email:</h2>
              <div className="flex flex-col items-start">

              <span className="py-1 font-mono text-lg">abenezermaru91@gmail.com</span>
              <span className="py-1 font-mono text-lg">drabsenior@gmail.com</span>
              </div>
            </div>
            <div className="flex items-start flex-col">
              <h2 className="font-semibold font-poppins text-xl">Phone:</h2>
              <div className="flex flex-col items-start ">
              <span className="py-1 font-mono text-lg">09 49 07 28 55</span>
              <span className="py-1 font-mono text-lg">07 77 07 28 55</span>
              </div>
            </div>
            </div>
            </div>

            {/* <TestimonialSlider /> */}
          </motion.div>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default page;
