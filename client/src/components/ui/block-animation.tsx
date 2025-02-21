import { motion } from "framer-motion";

export function BlockAnimation() {
  return (
    <div className="relative h-[400px]">
      <motion.div
        className="absolute w-32 h-32 bg-primary/10 rounded-lg"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "20%",
          left: "20%",
        }}
      />
      
      <motion.div
        className="absolute w-32 h-32 bg-blue-500/10 rounded-lg"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          top: "40%",
          left: "40%",
        }}
      />
      
      <motion.div
        className="absolute w-32 h-32 bg-cyan-500/10 rounded-lg"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          top: "60%",
          left: "60%",
        }}
      />
    </div>
  );
}
