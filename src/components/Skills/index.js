import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import s from './style.module.scss';

import { ReactComponent as CapIcon } from '../../assets/svg/cap.svg';
import { ReactComponent as LightIcon } from '../../assets/svg/lightbubl.svg';
import { ReactComponent as AcceptIcon } from '../../assets/svg/acceptIcon.svg';

const Skills = ({ language }) => {
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
      id="skills"
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
        <CapIcon className={s.firstIcon} />
      </motion.div>
      <motion.div
        ref={ref}
        variants={rightIconVariant}
        initial="hidden"
        animate={control}
        className={s.secondIcon}
      >
        <LightIcon className={s.secondIcon} />
      </motion.div>
      <div className={s.headerContainer}>
        <span className={s.header}>{language.skillsHeader}</span>
      </div>
      <div className={`${s.body} ${s.skillsContainer}`}>
        {language.skills.map(e => (
          <div className={s.skill}>
            <span className={s.skillName}>{e}</span>
            <AcceptIcon className={s.acceptIcon} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
