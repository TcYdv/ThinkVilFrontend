"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <motion.section
      className="py-12 px-4 sm:px-6 md:px-8 bg-gray-50 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight cursor-pointer"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, color: "#2563eb" }} // Scale and color change on hover
        >
          Our{" "}
          <motion.span
            className="text-blue-600 border-b-4 border-blue-600 pb-2 cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1, color: "#1e40af" }} // Slightly larger & darker on hover
          >
            Vision
          </motion.span>
        </motion.h2>

        {/* Vision Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 cursor-pointer"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02, color: "#374151" }} // Subtle pop effect
        >
          At <motion.span className="font-bold text-blue-700" whileHover={{ scale: 1.1 }}>ThinkVil</motion.span>, we strive to make{" "}
          <motion.span
            className="text-blue-700 font-semibold cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.05, color: "#1e40af" }}
          >
            science and mathematics
          </motion.span>{" "}
          more <motion.span className="font-semibold" whileHover={{ scale: 1.05, color: "#000" }}>accessible, engaging, and fun</motion.span>. Through{" "}
          <motion.span
            className="font-semibold text-blue-700 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.05, color: "#1e40af" }}
          >
            interactive simulations
          </motion.span>
          , we bridge the gap between abstract concepts and real-world applications,
          fostering a deeper understanding for learners of all ages.
        </motion.p>

        {/* Empowerment Message */}
        <motion.p
          className="text-lg font-semibold text-gray-800 italic cursor-pointer"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.1, color: "#000" }}
        >
          Empowering learners through interactive technology.
        </motion.p>

        {/* Video Section */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full aspect-video">
            <motion.iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/hSnwf9aPcJU"
              title="ThinkVil Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            ></motion.iframe>
          </div>
          {/* Animated Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            whileHover={{ opacity: 0.4 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
