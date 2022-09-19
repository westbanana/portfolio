import React, { useRef, useState } from 'react';

import { useClickAway } from 'react-use';
import s from './style.module.scss';

import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg';
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone.svg';
import { ReactComponent as MailIcon } from '../../assets/svg/mail.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as LinkeinIcon } from '../../assets/svg/linkedin.svg';

const Contacts = () => {
  const [isClicked, setIsClicked] = useState(false);
  const refContainer = useRef(null);
  useClickAway(refContainer, () => {
    setIsClicked(false);
  });
  return (
    <div
      ref={refContainer}
      className={s.mainContacts}
    >
      {isClicked && (
        <div className={s.otherContacts}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/westbanana"
          >
            <GithubIcon className={s.icon} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://t.me/@westbanana"
          >
            <TelegramIcon className={s.icon} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/illya-lysenko-340739239/"
          >
            <LinkeinIcon className={s.icon} />
          </a>
          <a href="mailto:westbanana4@gmail.com">
            <MailIcon className={s.iconMail} />
          </a>
        </div>
      )}
      {!isClicked ? (
        <div
          role="presentation"
          className={s.contacts}
          onClick={() => setIsClicked(!isClicked)}
        >
          <PhoneIcon className={s.contactsPhone} />
        </div>
      ) : (
        <a
          className={s.contacts}
          href="tel:+380978994874"
        >
          <PhoneIcon className={s.contactsPhone} />
        </a>
      )}
    </div>
  );
};

export default Contacts;
