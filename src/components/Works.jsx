import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
  image_alt,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {isMobile ? (
        <div className='bg-tertiary p-5 rounded-2xl w-full min-h-[500px] flex flex-col'>
          <div className='relative w-full h-[230px] bg-black-200 rounded-2xl'>
            <img
              src={image}
              alt={image_alt || name}
              className='w-full h-full object-contain rounded-2xl'
              loading="lazy"
            />
          </div>

          <div className='mt-5 flex-grow'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <div className='mt-4 flex justify-end gap-3'>
            {live_site_link && (
              <a
                href={live_site_link}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-[#4a22bd] hover:bg-[#5c2ee6] px-3 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200'
              >
                <svg 
                  className='w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                </svg>
                <span className="text-white text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      ) : (
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl w-full min-h-[500px] flex flex-col'
        >
        <div className='relative w-full h-[230px] bg-black-200 rounded-2xl'>
          <img
            src={image}
            alt={image_alt || name}
            className='w-full h-full object-contain rounded-2xl'
            loading="lazy"
          />
        </div>

        <div className='mt-5 flex-grow'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-4 flex justify-end gap-3'>
          {live_site_link && (
            <a
              href={live_site_link}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#4a22bd] hover:bg-[#5c2ee6] px-3 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200'
            >
              <svg 
                className='w-5 h-5 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
              <span className="text-white text-sm">Live Demo</span>
            </a>
          )}
        </div>
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className='relative z-10'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");


