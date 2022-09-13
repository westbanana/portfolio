import React, { useState } from 'react';

import s from './swiper.module.scss';

const Swiper = ({
  changeState, mainState, first, second,
}) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const swipe = (setState, state) => {
    setIsSwiped(!isSwiped);
    if (state === first) {
      setState(second);
    } else {
      setState(first);
    }
  };
  return (
    <div
      role="presentation"
      className={s.main}
      onClick={() => swipe(changeState, mainState)}
    >
      <div
        className={s.circle}
        style={{ left: `${isSwiped ? 'calc(100% - 23px)' : '0'}` }}
      />
    </div>
  );
};

export default Swiper;
