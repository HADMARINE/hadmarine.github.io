import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Github from "../image/github.png";
import Facebook from "../image/facebook.png";
import Kakaotalk from "../image/kakaotalk.png";
import Telegram from "../image/telegram.png";

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
      <div>
        <GlobalStyle />
        <a href="http://git.hadmarine.com">
          <img src={Github} alt="Github logo" />
        </a>
        <a href="http://fb.hadmarine.com">
          <img src={Facebook} alt="Facebook logo" />
        </a>
        <a href="http://fb.hadmarine.com">
          <img src={Kakaotalk} alt="Facebook logo" />
        </a>
        <a href="https://t.me/HADMARINE">
          <img src={Telegram} alt="Facebook logo" />
        </a>
      </div>
    );
  }
}
