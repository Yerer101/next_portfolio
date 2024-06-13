"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Avatar = () => {
  const randomizeBorderRadius = () => {
    const tl = Math.random() * 100 + 20;
    const tr = Math.random() * 100 + 20;
    const br = Math.random() * 100 + 20;
    const bl = Math.random() * 100 + 50;

    return `${tl}% ${tr}% ${br}% ${bl}%`;
  };
  return (
    <div className="hidden xl:flex xl:max-w-none h-full  justify-center items-center">
      <div className="">
        <motion.img
          src={"/abraham.png"}
          animate={{
            borderRadius: randomizeBorderRadius(),
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          width={490}
          height={90}
          objectFit="contain"
          alt=""
          className="  object-contain border-4 border-transparent rounded-[60%_40%_40%_20%_/70%_50%_30%_25%]   opacity-100 brightness-100"
        />
      </div>
    </div>
  );
};

export default Avatar;
