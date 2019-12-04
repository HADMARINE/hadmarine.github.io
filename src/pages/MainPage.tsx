import React, { Component } from "react";
import "../styles/index.scss";

import IntroductPhotoSection from "../components/IntroducePhotoSection";

export default class MainPage extends Component {
  render() {
    return (
      <div className="Style-center" style={{ margin: "1rem" }}>
        <IntroductPhotoSection />
        <p
          className="Text-xlarge Text-bold Font-quicksand"
          style={{ letterSpacing: "2px", marginTop: "10rem" }}
        >
          Hello World!
        </p>
      </div>
    );
  }
}
