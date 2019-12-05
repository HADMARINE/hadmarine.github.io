import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Headroom from "react-headroom";

//STYLESHEET
import "../styles/index.scss";

//COMPONENTS
// import IntroductPhotoSection from "../components/IntroducePhotoSection";
import BackPhoto from "../components/BackgroundImg";
import SocialLinks from "../components/SocialLinks";
import Header from "../components/Header";

//IMAGE
import backImg from "../image/back.png";
import profileImg from "../image/profile.png";

const GlobalStyle = createGlobalStyle`

`;

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Headroom>
          <Header />
        </Headroom>
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

          <BackPhoto src={profileImg} margin={70} />
          <div className="Blank-large" />
        </div>
      </div>
    );
  }
}
