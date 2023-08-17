import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Distribuidores", "Constructoras", "Comercios"];

export const WordChanger = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <div className="text-4xl md:text-6xl font-staffX mt-2 lg:mt-4 text-white uppercase flex text-center">
            ATENDEMOS A&nbsp;
          <motion.div
            className="text-orange"
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {words[currentWordIndex]}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};
