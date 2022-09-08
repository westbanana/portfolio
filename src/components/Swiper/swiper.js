import React, { useState } from 'react';
import  s from './swiper.module.scss';

const Swiper = ({ setTheme, theme}) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const swiper = () => {
    setIsSwiped(!isSwiped);
    console.log(1)
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }
  return (
    <div
      className={s.main}
      onClick={swiper}
    >
      <div
        className={s.circle}
        style={{left: `${isSwiped ? 'calc(100% - 23px)' : '0'}`}}
      />
    </div>
  );
}

export default Swiper;


