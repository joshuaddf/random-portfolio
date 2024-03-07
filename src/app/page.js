"use client";

import Image from "next/image";
import profilePic from "/public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center text-black w-full min-h-screen">
      <div className="flex items-center justify-between w-full mt-[-10rem]">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className=""
        >
          <Image src={profilePic} width={700} height={700} />
        </motion.div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="text-[3.5rem] text-left"
          />
          <p className="my-4 text-base font-medium text-[1.18rem]">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise web development.
          </p>
          <div className="flex items-center self-start mt-2 gap-5">
            <Link
              className="flex items-center justify-center bg-black text-white py-3 px-6 text-lg font-semibold hover:bg-white hover:text-black duration-300 border-2 border-transparent hover:border-black rounded-lg"
              href="/resume.pdf"
              target={"_blank"} 
              download={true}
            >
              Resume
              {/* <Image className="text-white ml-2 z-50"
              src={linkArrow}
              width={25}
              height={25}
              /> */}
            </Link>
            <Link className="text-lg font-medium capitalize hover:underline ml-4" href="jkdodofoli@gmail.com" target={"_blank"}>
              Contact
            </Link>
          </div>
        </div>
      </div>


    </main>
  );
}
