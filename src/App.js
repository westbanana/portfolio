import React, { useState } from 'react';
import s from './App.module.scss'
import Swiper from "./components/Swiper/swiper";
import { ReactComponent as Backpack} from "./assets/backpack.svg";
import { ReactComponent as Notebook} from "./assets/notebook.svg";
import useTheme from './components/Hooks/index.js'

const App = () => {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState('Українська')
  const [isTheme, setIsTheme] = useState('Темна тема')
  return (
    <div className={s.mainContainer}>
      <Backpack className={s.backpack} />
      <Notebook className={s.notebook} />
      <div className={s.swipes}>
        <div className={s.swiper}>
          <span>
            {language}
          </span>
          <Swiper
            changeLanguage={setLanguage}
            language={language}
          />
        </div>
        <div className={s.swiper}>
          <span>
            {isTheme}
          </span>
          <Swiper
            setTheme={setTheme}
            theme={theme}
            changeTheme={setIsTheme}
          />
        </div>
      </div>
      <div className={s.welcomeContainer}>
        <div className={s.headerContainer}>
          <span className={s.header}>&lt;Вітаю &#8260;&gt;</span>
        </div>
        <div className={s.body}>
          <span className={`${s.code} ${s.first}`}>&lt;span &frasl;&gt;</span>
          <span className={s.description}>
            Тут я збираю свої проекти і також розповідаю про себе
          </span>
          <span className={`${s.code} ${s.second}`}>&lt;span &frasl;&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default App;
