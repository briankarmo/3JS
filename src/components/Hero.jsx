import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const dragRef = useRef({ active: false, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      if (!dragRef.current.active) return;
      const y = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : null);
      if (y == null) return;
      const delta = y - dragRef.current.y;
      window.scrollBy(0, -delta);
      dragRef.current.y = y;
    };

    const handleUp = () => {
      dragRef.current.active = false;
      document.body.style.cursor = "";
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    // Fallback for browsers that do not emit pointer events
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  const beginDrag = (e) => {
    dragRef.current.active = true;
    dragRef.current.y = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    document.body.style.cursor = "grabbing";
  };
  return (
    <section id='home' className="relative w-full min-h-[100vh] sm:min-h-[115vh]">
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

      <div className='absolute inset-0 pt-[12vh] md:pt-[20vh] flex justify-center items-start'>
        <ComputersCanvas />
      </div>

      {/* Interact hint (centered below the model, above scroll indicator) */}
      <div className="pointer-events-none absolute left-0 right-0 w-full flex justify-center z-10 hidden sm:flex" style={{ bottom: '33vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-3 md:px-4 py-2 rounded-full bg-black/35 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(80,80,255,0.25)]"
        >
          <span className="text-[11px] md:text-[13px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#22d3ee] to-[#14b8a6]">
            Interact with the model — drag, rotate, and zoom
          </span>
        </motion.div>
      </div>

      {/* Drag-to-scroll zones above and below the 3D model */}
      <div
        className='absolute z-10 top-0 left-0 right-0 h-[22vh] cursor-grab hidden sm:block'
        onPointerDown={beginDrag}
        onMouseDown={beginDrag}
        onTouchStart={beginDrag}
        style={{ userSelect: 'none', WebkitUserSelect: 'none', touchAction: 'none' }}
      />
      <div
        className='absolute z-10 bottom-0 left-0 right-0 h-[24vh] cursor-grab hidden sm:block'
        onPointerDown={beginDrag}
        onMouseDown={beginDrag}
        onTouchStart={beginDrag}
        style={{ userSelect: 'none', WebkitUserSelect: 'none', touchAction: 'none' }}
      />

      <div className="absolute left-0 right-0 w-full flex justify-center items-center" style={{ bottom: '22vh' }}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary/70 bg-black/20 backdrop-blur-sm flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

	  {/* Instruction text above the scroll indicator */}
	  <div className="absolute left-0 right-0 w-full justify-center items-center hidden sm:flex" style={{ bottom: '28vh' }}>
		<span className="text-white/70 text-xs md:text-sm">Scroll down</span>
	  </div>
    </section>
  );
};

export default Hero;
