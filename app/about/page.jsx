"use client";
import Pagewrapper from "../components/Pagewrapper";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiApache,
  SiApachespark,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
        ],
      },
      {
        title: "Data science",
        icons: [<FaPython key='python' />, <SiApachespark key='apache'/>, <FaFileExcel key='excel'/>],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key='figma'/>, <SiAdobexd key='adobe'/>, <SiAdobephotoshop key='adphoto' />],
      },
      {
        title: "web scraping",
        icons: [<FaPython key='fapython'/>],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title:
          "Senior Software Engineer and lead technologist - Dan Energy Research and Development PLC",
        stage: "2021-2023",
      },
      {
        title: "Sofware Engineer - Dan Energy Research and Development PLC",
        stage: "2021",
      },
      {
        title: "Cloud  Practitioner - Dan Energy Research and Development PLC",
        stage: "2020",
      },

      {
        title: "Web Developer - Plusova Media solution",
        stage: "2019",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "React Development - Udemy ade BootCamp",
        stage: "2011",
      },
      {
        title: "Computer Science Degree - Unity University",
        stage: "2021",
      },
      {
        title: "Certified Cloud practitioner - AWS , Cloud Computing",
        stage: "2021",
      },
    ],
  },
];

import { motion } from "framer-motion";
import Avatar from "../components/Avatar";
import Circles from "../components/Circle";
import { useState } from "react";
import { fadeIn } from "@/Variants";
import CountUp from "react-countup";
import { BsFileExcel } from "react-icons/bs";

const Page = () => {
  const [itemIndex, setItemIndex] = useState(0);
  return (
    <Pagewrapper>
      <div className="h-[120vh] bg-primary/30 py-32  text-center xl:text-left">
        <Circles />
        {/* avatar image */}
        <motion.div
          className="hidden xl:flex absolute bottom-0 -left-[370px] "
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* <Avatar /> */}
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
          <div className="flex-1 flex flex-col justify-center ">
            {/* text */}
            <motion.h2
              className="h2"
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              More than <span className="text-accent">Four </span> <br /> years
              in the industry.
            </motion.h2>
            <p
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              10 years agao, I began freelancing as a developer. Since then,
              I&apos;ve done remote work for agencies, counsulted for startups, and
              collaborated on digital products for business and consumer use.
            </p>
            {/* counters */}
            <motion.div
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="flex flex-1 xl:gap-x-6">
                <div>
                  {/* experience */}
                  <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-0 ">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={4} duration={5} /> +
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Years of experience
                  </div>
                </div>
                <div>
                  {/* experience */}
                  <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-3">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={16} duration={5} /> +
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Satisfied clients
                  </div>
                </div>
                <div>
                  {/* experience */}
                  <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-3">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={64} duration={5} /> +
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                    Finished projects
                  </div>
                </div>
                <div></div>
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
            className="flex flex-col w-full xl:max-w-[50%] h-[489px]"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-10">
              {aboutData.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setItemIndex(index);
                    }}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    }   cursor-pointer capitalize  xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className=" py-2 flex flex-col xl:py-6 gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[itemIndex].info.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* title */}
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div className="">{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* icons */}
                      {item.icons?.map((icon, index) => {
                        return (
                          <div key={index} className="text-2xl  text-white">
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default Page;
