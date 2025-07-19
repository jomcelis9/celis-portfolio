import { motion } from "framer-motion";
import { useState } from "react";

export default function LogoCard({ logo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative p-3 w-28 h-28">
      {" "}
      {/* relative container */}
      {/* Text on hover */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="z-10 absolute top-0 left-0 bg-yellow-400 text-white text-xs px-2 py-1"
      >
        React: 100%
      </motion.span>
      {/* Image behind */}
      <img
        src={logo}
        className="absolute inset-0 w-full h-full object-contain p-7 z-0"
        alt="logo"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {/* Border box on top of image */}
      <motion.div
        className="absolute inset-0 z-10 border-4 border-yellow-400 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </div>
  );
}
