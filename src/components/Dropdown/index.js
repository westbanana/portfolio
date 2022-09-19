import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import s from './style.module.scss';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';

const Dropdown = ({
  language, setLanguage, english, ukrainian,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const refDropdown = useRef(null);
  useClickAway(refDropdown, () => {
    setIsOpened(false);
  });
  const changeLanguage = (localisation) => {
    setLanguage(localisation);
    setIsOpened(false);
  };

  return (
    <div
      ref={refDropdown}
      className={s.main}
    >
      <div
        role="presentation"
        onClick={() => setIsOpened(!isOpened)}
        className={s.setLanguage}
      >
        {language.language}
        <Arrow
          style={{ transform: `rotate(${isOpened ? '180deg' : '0'})` }}
          className={s.arrow}
        />
      </div>
      {isOpened && (
        <div className={s.languages}>
          <span
            role="presentation"
            onClick={() => changeLanguage(english)}
          >
            {language === ukrainian ? 'Англійська' : 'English'}
          </span>
          <span
            role="presentation"
            onClick={() => changeLanguage(ukrainian)}
          >
            {language === ukrainian ? 'Українська' : 'Ukrainian'}
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
