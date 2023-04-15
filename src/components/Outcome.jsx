import styled from "styled-components";
import { useState } from "react";

function Outcome({
  setinputbill,
  inputbill,
  setinputpeople,
  inputpeople,
  inputpercent,
  setinputpercent,
  settip,
  settotal,
  total,
  tip,
  buttonColor,
  setbuttonColor,
}) {
  function resetButton() {
    setinputbill("");
    setinputpeople("");
    setinputpercent("");
    settotal("0.00");
    settip("0.00");
    setbuttonColor("#0d686d");
  }
  return (
    <OutcomeContainer>
      <OutcomeInside>
        <TipTotalDiv>
          <TipAmountDiv>
            <h4>
              Tip Amount <br /> <span> / person</span>
            </h4>
            <h2>
              {" "}
              ${isNaN(tip) || !isFinite(tip)
                ? "0.00"
                : Number(tip).toFixed(2)}{" "}
            </h2>
          </TipAmountDiv>

          <TipAmountDiv>
            <h4>
              Total <br /> <span> / person</span>
            </h4>
            <h2>
              $
              {isNaN(total) || !isFinite(total)
                ? "0.00"
                : Number(total).toFixed(2)}
            </h2>
          </TipAmountDiv>
        </TipTotalDiv>
        <ResetButton buttonColor={buttonColor} onClick={resetButton}>
          RESET
        </ResetButton>
      </OutcomeInside>
    </OutcomeContainer>
  );
}

const OutcomeContainer = styled.div`
  width: 100%;
  padding: 0px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    padding: 32px 32px 32px 0px;
  }
`;

const OutcomeInside = styled.div`
  width: 100%;
  padding: 37px 22px 24px 24px;
  background-color: #00474b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (min-width: 1024px) {
    padding: 40px;
    gap: 134px;
    max-width: 413px;
  }
`;

const TipTotalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  @media (min-width: 1024px) {
    gap: 25px;
  }
`;

const TipAmountDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: #7f9d9f;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: -0.6666666865348816px;
    text-align: right;
    color: #26c2ae;
    @media (min-width: 1024px) {
      font-size: 48px;
      font-weight: 700;
      line-height: 71px;
      letter-spacing: -1px;
      text-align: right;
    }
  }
`;

const ResetButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.buttonColor};
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  color: #00474b;
  cursor: pointer;
  :hover {
    background-color: #9fe8df;
  }
  @media (min-width: 1024px) {
    width: 333px;
  }
`;

export default Outcome;
