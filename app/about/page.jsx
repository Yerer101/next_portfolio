"use client";
import Pagewrapper from "../components/Pagewrapper";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
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
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
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

const page = () => {
  const [itemIndex, setItemIndex] = useState(0);
  return (
    <Pagewrapper>
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <Circles />
        {/* avatar image */}
        <motion.div
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Avatar />
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className="flex-1 flex flex-col justify-center">
            {/* text */}
            <h2 className="h2">
              Captivating <span className="text-accent">stories </span> birth
              magnificent designs.
            </h2>
            <p className="max-w-[500px] mx-auto xl:mx0 mb-6 xl:mb-12 px-2 xl:px-0">
              10 years agao, I began freelancing as a developer. Since then,
              I've done remote work for agencies, counsulted for startups, and
              collaborated on digital products for business and consumer use.
            </p>
            {/* counters */}
            <div>
              {/* experience */}
              <div>experience</div>
            </div>
          </div>
          {/* info */}
          <div className="flex flex-col w-full xl:max-w-[48%] h-[489px]">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 z-10">
              {aboutData.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setItemIndex(index);
                      console.log("clicked here");
                    }}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    }cursor-pointer capitalize  xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
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
          </div>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default page;
