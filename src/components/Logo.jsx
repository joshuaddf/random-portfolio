"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-[1rem]">
      <Link href="/">
        <motion.div 
        whileHover={{ 
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: { duration: 1, repeat: Infinity },
         }}
         className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-white bg-black rounded-full">
          DDF
        </motion.div>
      </Link>
    </div>
  );
};

export default Logo;
