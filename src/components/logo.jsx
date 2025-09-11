import { motion } from "framer-motion";

export default function Logo() {
  const paths = [
    "M145.499 60.9496L150.5 758L182.498 801.5",
    "M148 66.9999L183.501 96.5L183.499 805.949",
    "M67.4997 24.9998L517.001 239L3.49966 484.5",
    "M83.0021 7.50017L622.503 242L11.0021 507",
  ];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 642 806"
      fill="none"
      className="w-20 h-20"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#paint0_linear_0_1)" // you can adjust gradient
          strokeWidth="15"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.5, // stagger animation
            ease: "easeInOut",
          }}
        />
      ))}

      <defs>
        <linearGradient id="paint0_linear_0_1" x1="161.509" y1="60.842" x2="166.488" y2="801.608" gradientUnits="userSpaceOnUse">
          <stop stopColor="#062166" />
          <stop offset="1" stopColor="#0D84DA" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
