"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const articles = [
  {
    category: "Tutorials",
    posts: [
      {
        title: "Building RESTful APIs with PHP",
        description: "Learn how to create a RESTful API from scratch using PHP. We'll go over basic concepts like routing, handling requests, and interacting with databases.",
        link: "/blog/building-restful-apis-with-php",
      },
      {
        title: "Creating RESTful APIs with Symfony",
        description: "A complete guide to building RESTful APIs using Symfony, including best practices for structuring routes, controllers, and services.",
        link: "/blog/creating-restful-apis-with-symfony",
      },
    ],
  },
  {
    category: "Career Advice",
    posts: [
      {
        title: "Lessons from My Journey as a CS Graduate",
        description: "Reflecting on my personal journey through computer science education, challenges faced, and lessons learned along the way.",
        link: "/blog/lessons-from-my-journey-as-a-cs-graduate",
      },
    ],
  },
  {
    category: "Solutions to Common Problems",
    posts: [
      {
        title: "Handling Authentication in Symfony",
        description: "Learn how to implement secure user authentication in Symfony. This tutorial covers all aspects, from login forms to password hashing.",
        link: "/blog/handling-authentication-in-symfony",
      },
    ],
  },
];

export const BlogPage = () => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-32 bg-gray-100 text-gray-800"
      id="blog"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-12"
        >
          Blog & Articles
        </motion.h2>

        {articles.map((articleCategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-semibold mb-6 text-center">{articleCategory.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articleCategory.posts.map((post, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 0.6 }}
                    className="text-xl font-bold text-purple-600 mb-2"
                  >
                    {post.title}
                  </motion.h4>
                  <p className="text-lg text-gray-500 mb-4">{post.description}</p>
                  <a href={post.link} className="text-purple-600 hover:text-purple-800">
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
