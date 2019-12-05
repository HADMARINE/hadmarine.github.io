import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Headroom from "react-headroom";

//STYLESHEET
import "../styles/index.scss";

//COMPONENTS
import IntroductPhotoSection from "../components/IntroducePhotoSection";
import BackPhoto from "../components/BackgroundImg";
import SocialLinks from "../components/SocialLinks";

//IMAGE
import backImg from "../image/back.png";
import profileImg from "../image/profile.png";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Headroom>헤더</Headroom>
        <div className="Style-center">
          <BackPhoto src={backImg} margin={0} />
          {/* <IntroductPhotoSection /> */}
          <p className="Text-xlarge Text-bold" style={{ marginTop: "10rem" }}>
            HADMARINE
          </p>
          <p className="Text-small">Self-directing Active Developer</p>
          <div className="Blank-small" />
          <SocialLinks />
          <p className="Text"></p>

          <BackPhoto src={profileImg} margin={100} />
          <div className="Blank-large" />
        </div>
      </div>
    );
  }
}
