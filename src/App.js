import React, { useState } from 'react';

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
import Contacts from './components/Contacts';
import Dropdown from './components/Dropdown';

const App = () => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState(english);
  const [currentScreen, setCurrentScreen] = useState('#welcome');
  return (
    <div className={s.mainContainer}>
      <Contacts />
      <div className={s.swipes}>
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
      <Dropdown
        setLanguage={setLanguage}
        language={language}
        english={english}
        ukrainian={ukrainian}
      />
      <div
        className={s.navButtons}
      >
        <a
          href="#welcome"
          className={s.navButton}
          style={{ background: `${currentScreen === '#welcome' ? 'var(--font)' : 'var(--componentHover)'}`, transform: `scale(${currentScreen === '#welcome' ? '1.5' : '1'})` }}
          onClick={() => setCurrentScreen('#welcome')}
        >
          .
        </a>
        <a
          href="#cockroach"
          className={s.navButton}
          style={{ background: `${currentScreen === '#cockroach' ? 'var(--font)' : 'var(--componentHover)'}`, transform: `scale(${currentScreen === '#cockroach' ? '1.5' : '1'})` }}
          onClick={() => setCurrentScreen('#cockroach')}
        >
          .
        </a>
        <a
          href="#converter"
          className={s.navButton}
          style={{ background: `${currentScreen === '#converter' ? 'var(--font)' : 'var(--componentHover)'}`, transform: `scale(${currentScreen === '#converter' ? '1.5' : '1'})` }}
          onClick={() => setCurrentScreen('#converter')}
        >
          .
        </a>
        <a
          href="#idlook"
          className={s.navButton}
          style={{ background: `${currentScreen === '#idlook' ? 'var(--font)' : 'var(--componentHover)'}`, transform: `scale(${currentScreen === '#idlook' ? '1.5' : '1'})` }}
          onClick={() => setCurrentScreen('#idlook')}
        >
          .
        </a>
        <a
          href="#skills"
          className={s.navButton}
          style={{ background: `${currentScreen === '#skills' ? 'var(--font)' : 'var(--componentHover)'}`, transform: `scale(${currentScreen === '#skills' ? '1.5' : '1'})` }}
          onClick={() => setCurrentScreen('#skills')}
        >
          .
        </a>
        <a
          href="#aboutme"
          className={s.navButton}
          style={{ background: `${currentScreen === '#aboutme' ? 'var(--font)' : 'var(--componentHover)'}`, transform: `scale(${currentScreen === '#aboutme' ? '1.5' : '1'})` }}
          onClick={() => setCurrentScreen('#aboutme')}
        >
          .
        </a>
      </div>
      <div
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
              <span className={`${s.description} ${s.descriptionAboutme}`}>
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
