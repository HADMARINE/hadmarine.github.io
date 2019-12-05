import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import "../styles/index.scss";

import Github from "../image/github.png";
import Facebook from "../image/facebook.svg";
import Kakaotalk from "../image/kakaotalk.png";
import Telegram from "../image/telegram.png";
import Mail from "../image/mail.png";
import Phone from "../image/phone.png";

const GlobalStyle = createGlobalStyle`

    display:flex;
    vertical-align: middle;
    justify-content:center;


    img{
        width: 50px;
        margin: 1rem;
    }
`;

export default class SocialLinks extends Component {
  render() {
    return (
      <div className="Animation-PageUpOpacity Animation-PageUpSpacing">
        <GlobalStyle />
        <a
          href="http://git.hadmarine.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Github} alt="Github logo" />
        </a>
        <a
          href="http://fb.hadmarine.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Facebook} alt="Facebook logo" />
        </a>
        <a
          href="https://open.kakao.com/o/sTY9SYNb"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Kakaotalk} alt="Kakaotalk logo" />
        </a>
        {window.innerWidth > 550 ? <></> : <br />}
        <a
          href="https://t.me/HADMARINE"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Telegram} alt="Facebook logo" />
        </a>
        <a
          href="mailto:contact@hadmarine.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Mail} alt="Mail logo" />
        </a>
        <a href="tel:+827046069485" rel="noopener noreferrer" target="_blank">
          <img src={Phone} alt="Phone logo" />
        </a>
      </div>
    );
  }
}
