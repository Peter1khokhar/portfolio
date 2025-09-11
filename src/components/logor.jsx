import { motion } from "framer-motion";

export default function LogoR() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-24 h-24 text-blue-600"
    >
      <motion.path
        d="M20 80 V20 H60 Q80 20 80 40 Q80 60 60 60 L20 60 Z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
