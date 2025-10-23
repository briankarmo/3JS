import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-10 flex flex-row flex-wrap justify-center gap-10'
      >
        {technologies.map((technology, index) => (
          <div
            className='w-28 h-28 flex items-center justify-center rounded-full bg-tertiary hover:bg-white/10 transition-colors duration-200 cursor-pointer'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-20 h-20 object-contain'
            />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
