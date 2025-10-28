import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mq = window.matchMedia("(max-width: 640px)");
      const update = () => setIsMobile(mq.matches);
      update();
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }, []);

    return (
      <motion.section
        variants={staggerContainer()}
        initial={isMobile ? 'show' : 'hidden'}
        whileInView={isMobile ? undefined : 'show'}
        viewport={isMobile ? { amount: 0 } : { once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-[1]`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
