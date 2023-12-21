import React from 'react';
import style from './img.module.css'

function Img(props) {
  return (
    <>
        <img className={style.img} src={props.src} alt={props.alt}></img>
    </>
  );
}

export default Img;