import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import s from './style.module.scss';

import { ReactComponent as Notebook } from '../../assets/svg/notebook.svg';
import { ReactComponent as Backpack } from '../../assets/svg/backpack.svg';

const Welcome = ({ language }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const exampleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
        variants={rightIconVariant}
        initial="hidden"
        animate={control}
        className={s.notebook}
      >
        <Notebook />
      </motion.div>
      <motion.div
        ref={ref}
        variants={leftIconVariant}
        initial="hidden"
        animate={control}
        className={s.backpack}
      >
        <Backpack />
      </motion.div>
      <div className={s.headerContainer}>
        <span className={s.header}>{language.welcome}</span>
      </div>
      <div className={s.body}>
        <span className={`${s.code} ${s.first}`}>&lt;span&gt;</span>
        <span className={s.description}>
          {language.welcomeDescription}
        </span>
        <span className={`${s.code} ${s.second}`}>&lt;span &frasl;&gt;</span>
      </div>
    </motion.div>
  );
};

export default Welcome;
