import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpSectionProps = {
  children: ReactNode;
  className?: string;
};

const FadeUpSection = ({ children, className = "" }: FadeUpSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpSection;
