"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Twitter from "/public/images/svgs/twitter.svg";
import Pinterest from "/public/images/svgs/pinterest.svg";
import Dribble from "/public/images/svgs/dribbble-icon.svg";
import Github from "/public/images/svgs/logo-github.svg";
import LinkedIn from "/public/images/svgs/linkedin.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Articles",
      path: "/articles",
    },
  ];

  const pathName = usePathname();

  return (
    <header className="flex items-center justify-between py-8 mt-[1rem]">
      <nav className="flex">
        {links.map((link, index) => {
          return (
            <Link className="" href={link.path} key={link.index}>
              <div
                className={`mx-4 text-lg relative max-w-auto group ${
                  pathName === link.path ? "border-b-4 border-black" : " "
                }`}
              >
                {link.name}
                <span className="h-1 absolute -bottom-1 left-0 inline-block w-0 group-hover:w-full duration-300 bg-black">
                  &nbsp;
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <nav className="flex items-center justify-center gap-8">
        <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.5 }}
         href="/" target={"_blank"}>
            <Image src={Pinterest} width={34} height={34} />
        </motion.a>
        <motion.a 
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.5 }}
        href="/" target={"_blank"}>
          <Image src={Twitter} width={34} height={34} />
        </motion.a>
       
        <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.5 }}
        href="/" target={"_blank"}>
          <Image src={Github} width={34} height={34} />
        </motion.a>
        {/* <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.5 }}
         href="/" target={"_blank"}>
          <Image src={LinkedIn} width={34} height={34} />
        </motion.a> */}
         {/* <motion.a
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.5 }}
         href="/" target={"_blank"}>
          <Image src={Dribble} width={34} height={34} />
        </motion.a> */}
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
