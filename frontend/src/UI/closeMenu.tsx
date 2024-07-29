import React, { useState } from "react";
import { motion } from "framer-motion";

export const closeMenu = () => {
  const [rotation, setRotation] = useState(0);

  const handleToggle = () => {
    setRotation(rotation + 720); // Увеличиваем угол поворота при каждом клике
    // onToggle();
  };
  return (
    <>
      <motion.div
        onClick={handleToggle}
        className="z-20 inline-flex gap-[5px] flex-col  cursor-pointer absolute  top-[35px] left-[35px]  items-center justify-center rounded-full"
        // animate={show ? { rotate: 720 } : { rotate: 0 }}
        animate={{ rotate: rotation }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.span
          animate={show ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          className="w-8 h-1 bg-black z-50 block"
        ></motion.span>
        <motion.span
          animate={show ? { opacity: 0 } : { opacity: 1 }}
          className="w-4 h-1 bg-black z-50 block self-start"
        ></motion.span>
        <motion.span
          animate={show ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          className="w-8 h-1 bg-black z-50 block"
        ></motion.span>
      </motion.div>
    </>
  );
};
