import React from 'react';
import style from './social.module.css'
import inst from '../../../images/insta.svg'
import fb from '../../../images/fb.svg'
import tg from '../../../images/tg.svg'
import twitt from '../../../images/twit.svg'
function Social() {
  return (
    <>
        <div className={style.social}>
          <ul className={style.socialUl}>
            <li className={style.socialLi}>
              <img className={style.socialLogo} src={inst}></img>
              <a className={style.socialLink} href='#'>Instagram</a>
            </li>
            <li className={style.socialLi}>
              <img className={style.socialLogo} src={fb}></img>
              <a className={style.socialLink} href='#'>Facebook</a>
            </li>
            <li className={style.socialLi}>
              <img className={style.socialLogo} src={tg}></img>
              <a className={style.socialLink} href='#'>Telegram</a>
            </li>
            <li className={style.socialLi}>
              <img className={style.socialLogo} src={twitt}></img>
              <a className={style.socialLink} href='#'>Twitter</a>
            </li>
          </ul>
        </div>
    </>
  );
}

export default Social;