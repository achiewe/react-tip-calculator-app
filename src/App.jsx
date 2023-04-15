import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Outcome from "./components/Outcome";
import Compute from "./components/Compute";
import logoImage from "/public/logo.svg";

function App() {
  const [inputbill, setinputbill] = useState("");
  const [inputpeople, setinputpeople] = useState("");
  const [inputpercent, setinputpercent] = useState("");
  const [tip, settip] = useState("0.00");
  const [total, settotal] = useState("0.00");
  const [buttonColor, setbuttonColor] = useState("#0d686d");
  return (
    <Body>
      <GlobalStyles />
      <Header>
        <img src={logoImage} alt="spliter logo" />
      </Header>
      <Main>
        <Compute
          inputbill={inputbill}
          setinputbill={setinputbill}
          setinputpeople={setinputpeople}
          inputpeople={inputpeople}
          setinputpercent={setinputpercent}
          inputpercent={inputpercent}
          settip={settip}
          settotal={settotal}
          setbuttonColor={setbuttonColor}
        />
        <Outcome
          inputbill={inputbill}
          setinputbill={setinputbill}
          setinputpeople={setinputpeople}
          inputpeople={inputpeople}
          setinputpercent={setinputpercent}
          inputpercent={inputpercent}
          settip={settip}
          settotal={settotal}
          total={total}
          tip={tip}
          buttonColor={buttonColor}
          setbuttonColor={setbuttonColor}
        />
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
  @media (min-width: 1024px) {
    margin-top: 163px;
    margin-bottom: 87.86px;
  }
`;

const Main = styled.main`
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ffffff;
  border-radius: 25px 25px 0px 0px;
  @media (min-width: 1024px) {
    max-width: 920px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex: none;
    border-radius: 25px;
  }
`;

export default App;
