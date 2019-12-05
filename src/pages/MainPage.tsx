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
import Profile from "../components/Profile";
import CardScroll from "../components/CardScroll";

//IMAGE
import backImg from "../image/back.png";
import profileImg from "../image/profile.png";

//STYLED-COMPONENTS
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
          <BackPhoto src={profileImg} margin={160} />

          {/* <IntroductPhotoSection /> */}
          <p className="Text-xlarge Text-bold" style={{ marginTop: "10rem" }}>
            HADMARINE
          </p>
          <p className="Text-small">Self-directing Full-stack Developer</p>
          <div className="Blank-medium" />
          <SocialLinks />
          <div className="Blank-medium" />
          <div className="Blank-large" />
          <Profile />
          <div className="Blank-large" />
          <CardScroll />
        </div>
      </div>
    );
  }
}
