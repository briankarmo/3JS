import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section id='home' className="relative w-full h-screen">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#0a0eb5]">Brian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-stack Software Developer
          </p>
        </div>
      </div>

      <div className='absolute inset-0 pt-[8vh] sm:pt-[10vh] md:pt-[12vh] flex justify-center items-start'>
        <ComputersCanvas />
      </div>

      <div className="absolute bottom-16 xs:bottom-12 sm:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 bg-black/30">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
      
      <div className="absolute bottom-[140px] xs:bottom-[130px] sm:bottom-[120px] w-full flex justify-center items-center text-white text-sm font-medium">
        Scroll down
      </div>

      <div className="absolute bottom-[172px] xs:bottom-[162px] sm:bottom-[152px] w-full flex justify-center pointer-events-none z-10">
        <div className="px-4 py-1.5 rounded-full bg-[#1e1938]/90 text-white text-xs sm:text-sm tracking-wide hidden [@media(min-width:360px)]:flex">
          Interact with the model — drag, rotate, and&nbsp;zoom
        </div>
      </div>
    </section>
  );
};

export default Hero;
