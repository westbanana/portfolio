import React, { useRef, useState } from 'react';

import s from './App.module.scss';
import { ReactComponent as CockRoachIcon } from './assets/svg/cockroach.svg';
import { ReactComponent as SecondCockRoachIcon } from './assets/svg/cockroach2.svg';
import { ReactComponent as ConverterIcon } from './assets/svg/convertIcon.svg';
import { ReactComponent as CurrencyIcon } from './assets/svg/currency.svg';
import { ReactComponent as IdLookProfile } from './assets/svg/idlookman.svg';
import { ReactComponent as IdLookMovie } from './assets/svg/idlookMovie.svg';
import landing from './assets/images/landing.png';
import converter from './assets/images/converter.png';
import idlook from './assets/images/idlook.png';
import useTheme from './components/Hooks/index.js';
import english from './assets/languages/english.json';
import ukrainian from './assets/languages/ukrainian.json';
import Swiper from './components/Swiper/swiper';
import Contacts from './components/Contacts';
import Dropdown from './components/Dropdown';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

const App = () => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState(ukrainian);
  const refMain = useRef(null);
  const refDropDown = useRef(null);
  return (
    <div
      ref={refMain}
      className={s.mainContainer}
    >
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
        ref={refDropDown}
        setLanguage={setLanguage}
        language={language}
        english={english}
        ukrainian={ukrainian}
      />
      <Welcome id="welcome" language={language} />
      <Projects
        link="http://gsd-kr.com/"
        elementId="cockroach"
        firstIcon={<CockRoachIcon />}
        secondIcon={<SecondCockRoachIcon />}
        wallpaper={landing}
        language={language}
        header={language.landingHeader}
        description={language.landingDescription}
      />
      <Projects
        link="https://react-converter.herokuapp.com/"
        elementId="converter"
        firstIcon={<ConverterIcon />}
        secondIcon={<CurrencyIcon />}
        wallpaper={converter}
        language={language}
        header={language.converterHeader}
        description={language.converterDescription}
      />
      <Projects
        link="https://id-look.herokuapp.com/"
        elementId="idlook"
        firstIcon={<IdLookProfile />}
        secondIcon={<IdLookMovie />}
        wallpaper={idlook}
        language={language}
        header={language.idLookHeader}
        description={language.idLookDescription}
      />
      <Skills language={language} />
      <AboutMe language={language} />
    </div>
  );
};

export default App;
