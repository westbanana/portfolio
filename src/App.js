import React, { useRef, useState } from 'react';

import s from './App.module.scss';
import { ReactComponent as Backpack } from './assets/svg/backpack.svg';
import { ReactComponent as Notebook } from './assets/svg/notebook.svg';
import { ReactComponent as CockRoachIcon } from './assets/svg/cockroach.svg';
import { ReactComponent as ConverterIcon } from './assets/svg/convertIcon.svg';
import { ReactComponent as CurrencyIcon } from './assets/svg/currency.svg';
import { ReactComponent as IdLookProfile } from './assets/svg/idlookman.svg';
import { ReactComponent as IdLookMovie } from './assets/svg/idlookMovie.svg';
import { ReactComponent as AcceptIcon } from './assets/svg/acceptIcon.svg';
import { ReactComponent as CapIcon } from './assets/svg/cap.svg';
import { ReactComponent as LightIcon } from './assets/svg/lightbubl.svg';
import { ReactComponent as ProfileIcon } from './assets/svg/profile.svg';
import landing from './assets/images/landing.png';
import converter from './assets/images/converter.png';
import idlook from './assets/images/idlook.png';
import useTheme from './components/Hooks/index.js';
import english from './assets/languages/english.json';
import ukrainian from './assets/languages/ukrainian.json';
import Swiper from './components/Swiper/swiper';

const App = () => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState(english);
  const refWelcome = useRef(null);
  const refLanding = useRef(null);
  const refConverter = useRef(null);
  const refIdLook = useRef(null);
  const refSkills = useRef(null);
  const refAbout = useRef(null);
  return (
    <div className={s.mainContainer}>
      <div className={s.navButtons}>
        <a
          href="#welcome"
          className={s.navButton}
        >
          .
        </a>
        <a
          href="#cockroach"
          className={s.navButton}
        >
          .
        </a>
        <a
          href="#converter"
          className={s.navButton}
        >
          .
        </a>
        <a
          href="#idlook"
          className={s.navButton}
        >
          .
        </a>
        <a
          href="#skills"
          className={s.navButton}
        >
          .
        </a>
        <a
          href="#aboutme"
          className={s.navButton}
        >
          .
        </a>
      </div>
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
      <div
        ref={refWelcome}
        id="welcome"
        className={`${s.blockContainer} ${s.firstContainer}`}
      >
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
      <div
        ref={refLanding}
        id="cockroach"
        className={`${s.blockContainer} ${s.firstContainer}`}
      >
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
      <div
        ref={refConverter}
        id="converter"
        className={`${s.blockContainer} ${s.firstContainer}`}
      >
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
      <div
        ref={refIdLook}
        id="idlook"
        className={`${s.blockContainer} ${s.firstContainer}`}
      >
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
      <div
        ref={refSkills}
        id="skills"
        className={`${s.blockContainer} ${s.firstContainer}`}
      >
        <CapIcon className={s.cap} />
        <LightIcon className={s.light} />
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
      </div>
      <div
        ref={refAbout}
        id="aboutme"
        className={`${s.blockContainer} ${s.firstContainer} ${s.lastContainer}`}
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
              <span className={s.description}>
                {element}
              </span>
              <span className={`${s.code} ${s.first}`}>&lt;li &frasl;&gt;</span>
            </div>
          ))}
          <span className={`${s.code} ${s.first}`}>&lt;ul &frasl;&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default App;
