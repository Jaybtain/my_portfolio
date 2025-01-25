"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "Python", "PHP", "TypeScript"],
  },
  {
    category: "Frameworks/Tools",
    items: ["React", "Next.js", "Symfony", "Docker", "Kubernetes", "CI/CD", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "Bitbucket"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure"],
  },
 
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "CI/CD", "Bitbucket"],
  },
];




export const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-32 glass from-indigo-600 via-purple-600 to-blue-600 text-white"
      id="about"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg mb-8 leading-relaxed"
        >
          <p>
            I am a passionate software developer with a strong background in
            full-stack development. I specialize in building scalable, efficient,
            and user-friendly applications. My journey in programming began during
            my college days, and I have never looked back since. I am constantly
            learning and expanding my skills to stay up-to-date with the latest
            trends in the tech world.
            Below is my tech stack:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold mb-6 text-center"></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg bg-black-100 p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  className="text-xl font-bold text-purple-600 mb-2"
                >
                  {skill.category}
                </motion.h4>
                <ul className="list-disc pl-5 text-gray-500">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-lg">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        

        
      </div>
    </motion.section>
  );
};
