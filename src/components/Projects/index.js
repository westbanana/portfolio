import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import s from './style.module.scss';

const Projects = ({
  language, firstIcon, secondIcon, wallpaper, header, description, link,
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const exampleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const leftIconVariant = {
    visible: { opacity: 1, left: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, left: '-300px' },
  };
  const rightIconVariant = {
    visible: { opacity: 1, right: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, right: '-300px' },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={exampleVariant}
      initial="hidden"
      animate={control}
      className={s.blockContainer}
    >
      <motion.div
        ref={ref}
        variants={leftIconVariant}
        initial="hidden"
        animate={control}
        className={s.firstIcon}
      >
        {firstIcon}
      </motion.div>
      <motion.div
        ref={ref}
        variants={rightIconVariant}
        initial="hidden"
        animate={control}
        className={s.secondIcon}
      >
        {secondIcon}
      </motion.div>
      <div className={s.headerContainer}>
        <span className={s.header}>{header}</span>
        <img src={wallpaper} alt="project.png" />
      </div>
      <div
        className={s.body}
      >
        <span className={`${s.code} ${s.first}`}>&lt;span&gt;</span>
        <span className={s.description}>
          {description}
        </span>
        <span className={`${s.code} ${s.second}`}>&lt;span &frasl;&gt;</span>
      </div>
      <div className={s.buttonContainer}>
        <a
          className={s.button}
          rel="noreferrer"
          target="_blank"
          href={link}
        >
          <div className={s.topStick} />
          <span>
            {language.button}
          </span>
        </a>
        <div className={s.bottomStick} />
      </div>
    </motion.div>
  );
};

export default Projects;
