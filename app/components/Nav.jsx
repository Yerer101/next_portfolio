"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { FaAddressBook } from "react-icons/fa";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "address", path: "/address", icon: <FaAddressBook /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex flex-col  items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50  top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <div key={index}>
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center pt-2 p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-[7px]"></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

// <Link
//   href={link.path}
//   key={index}
//   className={`${
//     link.path === pathname && "text-accent"
//   } relative flex items-center group hover:text-accent transition-all duration-300`}
// >
