import React, { useState } from 'react';

import s from './App.module.scss';
import { ReactComponent as Backpack } from './assets/backpack.svg';
import { ReactComponent as Notebook } from './assets/notebook.svg';
import { ReactComponent as IIcon } from './assets/i.svg';
import { ReactComponent as List } from './assets/list.svg';
import { ReactComponent as CockRoachIcon } from './assets/cockroach.svg';
import { ReactComponent as ConverterIcon } from './assets/convertIcon.svg';
import { ReactComponent as CurrencyIcon } from './assets/currency.svg';
import { ReactComponent as IdLookProfile } from './assets/idlookman.svg';
import { ReactComponent as IdLookMovie } from './assets/idlookMovie.svg';
import landing from './assets/landing.png';
import converter from './assets/converter.png';
import idlook from './assets/idlook.png';
import useTheme from './components/Hooks/index.js';
import english from './assets/languages/english.json';
import ukrainian from './assets/languages/ukrainian.json';
import Swiper from './components/Swiper/swiper';

const App = () => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState(english);
  return (
    <div className={s.mainContainer}>
      <div className={s.swipes}>
        <div className={s.swiper}>
          <span>
            {language.language}
          </span>
          <Swiper
            changeState={setLanguage}
            mainState={language}
            first={ukrainian}
            second={english}
          />
        </div>
        <div className={s.swiper}>
          <span>
            {language.darkTheme}
          </span>
          <Swiper
            changeState={setTheme}
            mainState={theme}
            first="dark"
            second="light"
          />
        </div>
      </div>
      <div className={`${s.blockContainer} ${s.firstContainer}`}>
        <Notebook className={s.notebook} />
        <Backpack className={s.backpack} />
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
      </div>
      <div className={`${s.blockContainer} ${s.secondContainer}`}>
        <IIcon className={s.iIcon} />
        <List className={s.list} />
        <div className={s.body}>
          <span className={`${s.code} ${s.first}`}>&lt;span&gt;</span>
          <h1 className={s.description}>
            {language.aboutHeader}
          </h1>
          <span className={`${s.code} ${s.second}`}>&lt;span &frasl;&gt;</span>
        </div>
      </div>
      <div className={`${s.blockContainer} ${s.firstContainer}`}>
        <CockRoachIcon className={s.CockroachSecond} />
        <CockRoachIcon className={s.CockroachFirst} />
        <div className={s.headerContainer}>
          <span className={s.header}>{language.landingHeader}</span>
          <img src={landing} alt="project.png" />
        </div>
        <div className={s.body}>
          <span className={`${s.code} ${s.first}`}>&lt;span&gt;</span>
          <span className={s.description}>
            {language.landingDescription}
          </span>
          <span className={`${s.code} ${s.second}`}>&lt;span &frasl;&gt;</span>
        </div>
        <div className={s.buttonContainer}>
          <a
            className={s.button}
            rel="noreferrer"
            target="_blank"
            href="http://gsd-kr.com/"
          >
            <div className={s.topStick} />
            <span>
              {language.button}
            </span>
          </a>
          <div className={s.bottomStick} />
        </div>
      </div>
      <div className={`${s.blockContainer} ${s.firstContainer}`}>
        <ConverterIcon className={s.converter} />
        <CurrencyIcon className={s.currency} />
        <div className={s.headerContainer}>
          <span className={s.header}>{language.converterHeader}</span>
          <img src={converter} alt="project.png" />
        </div>
        <div className={s.body}>
          <span className={`${s.code} ${s.first}`}>&lt;span&gt;</span>
          <span className={s.description}>
            {language.converterDescription}
          </span>
          <span className={`${s.code} ${s.second}`}>&lt;span &frasl;&gt;</span>
        </div>
        <div className={s.buttonContainer}>
          <a
            className={s.button}
            rel="noreferrer"
            target="_blank"
            href="https://react-converter.herokuapp.com/?from=USD&to=UAH&amount=1"
          >
            <div className={s.topStick} />
            <span>
              {language.button}
            </span>
          </a>
          <div className={s.bottomStick} />
        </div>
      </div>
      <div className={`${s.blockContainer} ${s.firstContainer}`}>
        <IdLookProfile className={s.profile} />
        <IdLookMovie className={s.movie} />
        <div className={s.headerContainer}>
          <span className={s.header}>{language.idLookHeader}</span>
          <img src={idlook} alt="project.png" />
        </div>
        <div className={s.body}>
          <span className={`${s.code} ${s.first}`}>&lt;span&gt;</span>
          <span className={s.description}>
            {language.idLookDescription}
          </span>
          <span className={`${s.code} ${s.second}`}>&lt;span &frasl;&gt;</span>
        </div>
        <div className={s.buttonContainer}>
          <a
            className={s.button}
            rel="noreferrer"
            target="_blank"
            href="https://id-look.herokuapp.com/"
          >
            <div className={s.topStick} />
            <span>
              {language.button}
            </span>
          </a>
          <div className={s.bottomStick} />
        </div>
      </div>
    </div>
  );
};

export default App;
