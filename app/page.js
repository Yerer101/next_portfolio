"use client";
import { fadeIn } from "@/Variants";
import Pagewrapper from "./components/Pagewrapper";
import ProjectsBtn from "./components/ProjectsBtn";
import { motion } from "framer-motion";
import Avatar from "./components/Avatar";
import ParticleContainer from "./components/ParticleContainer";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <Pagewrapper>
      <div className="bg-primary/60 h-screen">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto  ">
            {/* title */}
            <motion.h1
              className="h1 font-mono"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Hi I&apos;m Abenezer Maregu <br />
              <span className="text-accent font-mono">
                <TypeAnimation
                  sequence={[
                    "Backend Devloper",
                    3000,
                    "FrontEnd Devloper",
                    3000,
                    "Cloud Engineer",
                    3000,
                    "Data analyst",
                    3000,
                    "AI enthusiast",
                  ]}
                  speed={30}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.h1>
            {/* subititle */}
            <motion.p
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Am a software enginner with more than 4 years experience sepcializing in web devlopment
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              className="hidden xl:flex"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div>image</div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg-imate */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          <ParticleContainer />
          {/* avatar */}
          <motion.div
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:right-[8%] lg:bottom-0"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </Pagewrapper>
  );
}
