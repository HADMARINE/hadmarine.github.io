import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

//MODULES
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
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

//IMAGE
import backImg from "../image/back.png";
import profileImg from "../image/profile.png";
import portfolio_back from "../image/portfolio_back.png";

//STYLED-COMPONENTS
const GlobalStyle = createGlobalStyle`

`;

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        {window.innerWidth < 500 ? (
          <></>
        ) : (
          <Headroom>
            <Header />
          </Headroom>
        )}

        <div className="Style-center">
          {window.innerWidth < 500 ? (
            <>
              <BackPhoto src={backImg} margin={0} />
              <BackPhoto src={profileImg} margin={130} />
              <BackPhoto src={portfolio_back} margin={235} />
            </>
          ) : (
            <>
              <BackPhoto src={backImg} margin={0} />
              <BackPhoto src={profileImg} margin={140} />
              <BackPhoto src={portfolio_back} margin={250} />
            </>
          )}

          <p className="Text-xlarge Text-bold" style={{ marginTop: "10rem" }}>
            HADMARINE
          </p>
          <p className="Text-small">Self-directing Full-stack Developer</p>
          <div className="Blank-medium" />
          <SocialLinks />
          <div className="Blank-large" />
          <span id="profile" />
          <Profile />
          <div className="Blank-medium" />
          <span id="portfolio" />
          {window.innerWidth < 500 ? <div className="Blank-small" /> : <></>}
          <Portfolio />
          <div className="Blank-large" />
          <span id="contact" />
          <Contact />
          {window.innerWidth < 500 ? <div className="Blank-large" /> : <></>}
        </div>
      </div>
    );
  }
}
