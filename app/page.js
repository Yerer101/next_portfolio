"use client";
import { fadeIn } from "@/Variants";
import Pagewrapper from "./components/Pagewrapper";
import ProjectsBtn from "./components/ProjectsBtn";
import { motion } from "framer-motion";
import Avatar from "./components/Avatar";
import ParticleContainer from "./components/ParticleContainer";
import { TypeAnimation } from "react-type-animation";
import ServiceSlider from "./components/ServiceSlider";

import Homepage from "./components/Homepage";
import AboutPage from "./about/page";
import ServicePage from "./services/page";
import ContactPage from "./contact/page";
import Workpage from "./work/page";
import AddressPage from "./address/page";

export default function Home() {
  return (
    <div>
      <Homepage />
      <AboutPage />
      <ServicePage />
      <AddressPage />
      <Workpage />
      <ContactPage />
    </div>
  );
}
