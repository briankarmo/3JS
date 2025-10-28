import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col items-center justify-center'
      >
        <p className={styles.sectionSubText + " text-center"}>LET'S WORK TOGETHER</p>
        <h3 className={styles.sectionHeadText + " text-center"}>Contact Me on<br/>Upwork</h3>
        <p className="mt-6 text-secondary text-[17px] max-w-xl leading-[30px] text-center">
          I'm available for freelance projects through Upwork. Visit my profile to see my work history, reviews, and to discuss your project needs.
        </p>
        <a
          href="https://www.upwork.com/freelancers/briankarmo?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-tertiary rounded-xl hover:bg-[#14a800] transition-colors duration-300 mt-10"
        >
          <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
            <path d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6l0.1-0.6c3.2-17.6,13.1-47.2,43.8-47.2c23,0,41.7,18.7,41.7,41.7 C398.9,278.2,380.2,296.9,357.2,296.9z M357.2,171.4c-39.3,0-69.8,25.5-82.2,67.4c-18.9-28.4-33.3-62.4-41.7-91.2h-42.6v110.1 c0,21.7-17.6,39.3-39.3,39.3s-39.3-17.6-39.3-39.3V147.6H69.5v110.1c0,45.4,37,82.4,82.4,82.4s82.4-37,82.4-82.4v-18.5 c8.3,17.1,18.5,34.3,31,49.9l-26.3,123.8h43.5l19.1-89.7c16.7,10.7,35.8,17.6,55.6,17.6c46.8,0,84.9-38.1,84.9-84.9 C442.1,209.4,404,171.4,357.2,171.4z"/>
          </svg>
          <span className="text-white font-medium">View My Upwork Profile</span>
        </a>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
