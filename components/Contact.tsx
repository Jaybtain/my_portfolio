"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-x-clip py-16 lg:py-32 text-white max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-8 md:gap-16"
      >
        {/* Text Section */}
        <div className="space-y-8 md:space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-300 leading-tight"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-6 sm:p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-gray-300">Phone</p>
              <a
                href="tel:+37061703191"
                className="text-lg sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +370 617 03191
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-gray-300">Email</p>
              <a
                href="mailto:johnjonah0866@gmail.com"
                className="text-lg sm:text-2xl lg:text-3xl font-semibold hover:text-purple-400 transition duration-300 flex items-center"
              >
                johnjonah0866@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-gray-300">Location</p>
              <address className="text-base sm:text-lg lg:text-xl not-italic leading-relaxed">
                Vilnius
                <br />
                Lithuania
              </address>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="null"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};
