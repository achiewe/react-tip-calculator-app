import styled from "styled-components";
import { useState } from "react";
import DollarImage from "/public/icon-dollar.svg";
import PersonImage from "/public/icon-person.svg";

function Compute() {
  return (
    <ComputeContaier>
      <ComputeDivInside>
        <InputDiv>
          <h3> Bill</h3>
          <input placeholder="0.00" />
        </InputDiv>
        <SelectTipDiv>
          <h3> Select Tip %</h3>

          <PercentButtonsDiv>
            <PercentButtons>5%</PercentButtons>
            <PercentButtons>10%</PercentButtons>
            <PercentButtons>15%</PercentButtons>
            <PercentButtons>25%</PercentButtons>
            <PercentButtons>50%</PercentButtons>
            <input placeholder="Custom" />
          </PercentButtonsDiv>
        </SelectTipDiv>
        <InputDiv2>
          <h3> Number of People</h3>
          <input placeholder="0.00" />
        </InputDiv2>
      </ComputeDivInside>
    </ComputeContaier>
  );
}

const ComputeContaier = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h3 {
    font-family: "Space Mono", monospace;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #5e7a7d;
  }

  input {
    font-family: "Space Mono", monospace;
    width: 100%;
    height: 48px;
    background-color: #f3f9fa;
    border: none;
    border-radius: 5px;
    padding: 17px;
    ::placeholder {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0px;
      text-align: right;
      color: #9ebbbd;
    }
  }
`;

const ComputeDivInside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    background-image: url(${DollarImage});
    background-repeat: no-repeat;
    background-position: 19px 14px;
  }
`;

const SelectTipDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PercentButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;

  input {
    height: 48px;
    width: 147.81369018554688px;
    left: 0px;
    top: 0px;
    border-radius: 5px;
    background-color: #f3f9fa;
    ::placeholder {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0px;
      text-align: right;
      color: #547878;
    }
  }
`;

const PercentButtons = styled.button`
  height: 48px;
  width: 146.6311798095703px;
  left: 0px;
  top: 0px;
  border-radius: 5px;
  border: none;
  background-color: #00474b;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

const InputDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
    background-image: url(${PersonImage});
    background-repeat: no-repeat;
    background-position: 19px 14px;
  }
`;

export default Compute;
