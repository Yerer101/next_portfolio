"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./Transition";
const Pagewrapper = ({ children, className }) => {
  const pathname = usePathname();

  return (
    <motion.div key={pathname} className={className}>
      <Transition />
      {children}
    </motion.div>
  );
};

export default Pagewrapper;
