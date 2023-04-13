import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Outcome from "./components/Outcome";
import Compute from "./components/Compute";
import logoImage from "/public/logo.svg";

function App() {
  return (
    <Body>
      <GlobalStyles />
      <Header>
        <img src={logoImage} alt="spliter logo" />
      </Header>
      <Main>
        <Compute></Compute>
        <Outcome></Outcome>
      </Main>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #c5e4e7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  margin-top: 50px;
  margin-bottom: 41px;
`;

const Main = styled.main`
  width: 100%;
  max-width: 375px;
  flex: 1;
  background-color: #ffffff;
  border-radius: 25px 25px 0px 0px;
`;

export default App;
