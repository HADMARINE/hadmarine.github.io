import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import code from "../image/vscode.png";
import skills from "../image/skills.png";
import "../styles/index.scss";

export default class IntroducePhotoSection extends Component {
  render() {
    return (
      <div
        className="Style-flex-center"
        style={{
          // marginTop: "calc( 50vh - 18rem - 8vw )",
          marginBottom: " calc( 10rem - 15vw )"
        }}
      >
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={1000}
          interval={5000}
          showThumbs={false}
          useKeyboardArrows={true}
          width={"calc( 8rem + 55vw )"}
        >
          <div>
            <img src={code} alt="Codes" />
          </div>
          <div>
            <img src={skills} alt="Skills" />
          </div>
        </Carousel>
      </div>
    );
  }
}
