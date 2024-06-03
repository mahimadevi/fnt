// import React from "react";
// import background from "../assets/bg.jpg";
// import styled from "styled-components";
// const Background = () => {
//   return (
//     <Conatiner>
//       <img src={background} alt="background" />
//     </Conatiner>
//   );
// };

// const Conatiner = styled.div`
//   height: 100vh;
//   width: 100vw;
//   img {
//     height: 100vh;
//     width: 100vw;
//   }
// `;

// export default Background;

import React from "react";
import background from "../assets/bg.jpg";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    // height: 100%;
    // width: 100%;
  }
`;

const Background = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={background} alt="background" />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
    display: block;
  }
`;

export default Background;
