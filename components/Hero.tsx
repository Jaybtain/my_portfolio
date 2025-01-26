"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { FaGithub, FaBitbucket, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import profilepic from "./assets/john_logo.png";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#12FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const [activeIcon, setActiveIcon] = useState("github"); // Controls which icon is animating
  const [isHovered, setIsHovered] = useState<"github" | "bitbucket" | "linkedin" | null>(null);


  const color = useMotionValue(COLORS_TOP[0]);

  // Background color animation
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  // Loop through icons with a delay
  useEffect(() => {
    if (isHovered !== null) return; // Stop the animation when any icon is hovered
    const icons = ["github", "bitbucket", "linkedin"];
    let index = 0;

    const interval = setInterval(() => {
      setActiveIcon(icons[index]);
      index = (index + 1) % icons.length;
    }, 1000);

    return () => clearInterval(interval); 
  }, [isHovered]);

  // Animation variants for the icons
  const iconVariants = {
    normal: { scale: 1 },
    active: { scale: 1.5 },
  };

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </span>
        <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
          John Jonah
        </h1>

        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px 5px white",
            borderRadius: "9999px",
          }}
          className="rounded-full p-2 transition-all duration-300"
        >
          <Image
            src={profilepic}
            alt="profile pic"
            width={250}
            height={250}
            className="rounded-full"
          />
        </motion.div>

        {/* Social Icons */}
        <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-4 mb-4">
          {/* GitHub Icon */}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            animate={isHovered === "github" || activeIcon === "github" ? "active" : "normal"}
            onMouseEnter={() => setIsHovered("github")}
            onMouseLeave={() => setIsHovered(null)}
            className="text-black transition-colors duration-300 hover:text-gray-800"
          >
            <FaGithub size={30} />
          </motion.a>

          {/* Bitbucket Icon */}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            animate={isHovered === "bitbucket" || activeIcon === "bitbucket" ? "active" : "normal"}
            onMouseEnter={() => setIsHovered("bitbucket")}
            onMouseLeave={() => setIsHovered(null)}
            className="text-black transition-colors duration-300 hover:text-blue-600"
          >
            <FaBitbucket size={30} />
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/john-jonah-579793128"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            animate={isHovered === "linkedin" || activeIcon === "linkedin" ? "active" : "normal"}
            onMouseEnter={() => setIsHovered("linkedin")}
            onMouseLeave={() => setIsHovered(null)}
            className="text-black transition-colors duration-300 hover:text-blue-700"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </div>

        <p className="my-6 max-w-xl text-center">
          Full-Stack Developer | Crafting Scalable Solutions with 3+ Years of Experience | Based in Vilnius
        </p>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
        >
          Download CV
          <FiArrowRight />
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
};
