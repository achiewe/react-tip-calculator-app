import styled from "styled-components";
import { useState } from "react";

function Outcome() {
  return (
    <OutcomeContainer>
      <OutcomeInside>
        <TipTotalDiv>
          <TipAmountDiv>
            <h4>
              Tip Amount <br /> <span> / person</span>
            </h4>
            <h2> $0.00</h2>
          </TipAmountDiv>

          <TipAmountDiv>
            <h4>
              Total <br /> <span> / person</span>
            </h4>
            <h2> $0.00</h2>
          </TipAmountDiv>
        </TipTotalDiv>
        <button> RESET </button>
      </OutcomeInside>
    </OutcomeContainer>
  );
}

const OutcomeContainer = styled.div`
  width: 100%;
  padding: 0px 24px 32px 24px;
  display: flex;
  flex-direction: column;
`;

const OutcomeInside = styled.div`
  width: 100%;
  padding: 37px 22px 24px 24px;
  background-color: #00474b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  button {
    width: 100%;
    height: 48px;
    border-radius: 5px;
    border: none;
    background-color: #26c2ae;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
    color: #00474b;
  }
`;

const TipTotalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
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
  }
`;

export default Outcome;