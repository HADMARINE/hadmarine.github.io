import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Headroom from "react-headroom";

//STYLESHEET
import "../styles/index.scss";

//COMPONENTS
import IntroductPhotoSection from "../components/IntroducePhotoSection";
import BackPhoto from "../components/BackgroundImg";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";

//IMAGE
import backImg from "../image/back.png";
import profileImg from "../image/profile.png";

//STYLED-COMPONENTS
const GlobalStyle = createGlobalStyle`
    animation: PageUpInitial-Animate 1s ease-in-out;
    @keyframes PageUpInitial-Animate{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
`;

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Headroom>
          <Header />
        <div className="Style-center">
          <BackPhoto src={backImg} margin={0} />
          {/* <IntroductPhotoSection /> */}
          <p className="Text-xlarge Text-bold" style={{ marginTop: "10rem" }}>
            HADMARINE
          </p>
          <p className="Text-small">Self-directing Full-stack Developer</p>
          <div className="Blank-medium" />
          <SocialLinks />
          <p className="Text"></p>

          <BackPhoto src={profileImg} margin={100} />
          <div className="Blank-large" />
        </div>
      </div>
    );
  }
}
