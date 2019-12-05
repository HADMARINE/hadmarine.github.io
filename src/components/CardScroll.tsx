// import React, { Component } from "react";
// import styled from "styled-components";

// import "../styles/index.scss";

// const Wrapper = styled.div``;

// export default class CardScrollClass extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <div></div>
//       </Wrapper>
//     );
//   }
// }

import React, { Component } from "react";
import styled from "styled-components";

export default class Product extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    img: this.props.img,
    title: this.props.title,
    content: this.props.content,
    link: this.props.link,
    maclink: this.props.maclink
  };
  handleOpenLink = () => {};
  render() {
    return (
      <>
        <div
          // className="max-w-sm rounded overflow-hidden shadow-lg"
          style={{ margin: "1rem" }}
        >
          {/* <img className="w-full" src={this.state.img} alt="Product Photo" /> */}
          <div className="px-6 py-4">
            {/* <div className="font-bold text-xl mb-2">{this.state.title}</div> */}
            <p className="text-700 text-base">{this.state.content}</p>
          </div>
          <div
          // className="px-6 py-4"
          // style={{ display: "flex", justifyContent: "center" }}
          ></div>
        </div>
      </>
    );
  }
}
