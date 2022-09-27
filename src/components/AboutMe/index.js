import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import s from './style.module.scss';

import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg';

const AboutMe = ({ language }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const exampleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
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
      <ProfileIcon className={s.profileIcon} />
      <div className={s.headerContainer}>
        <span className={s.header}>{language.aboutMeHeader}</span>
      </div>
      <div className={s.body}>
        <span className={`${s.code} ${s.first}`}>&lt;ul&gt;</span>
        {language.aboutMeDescription.map(element => (
          <div className={s.aboutMeBlock}>
            <span className={`${s.code} ${s.first}`}>&lt;li&gt;</span>
            <span className={`${s.description} ${s.descriptionAboutme}`}>
              {element}
            </span>
            <span className={`${s.code} ${s.first}`}>&lt;li &frasl;&gt;</span>
          </div>
        ))}
        <span className={`${s.code} ${s.first}`}>&lt;ul &frasl;&gt;</span>
      </div>
    </motion.div>
  );
};

export default AboutMe;
