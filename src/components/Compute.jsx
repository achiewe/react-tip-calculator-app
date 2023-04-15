import styled from "styled-components";
import { useEffect, useState } from "react";
import DollarImage from "/public/icon-dollar.svg";
import PersonImage from "/public/icon-person.svg";

function Compute({
  setinputbill,
  inputbill,
  setinputpeople,
  inputpeople,
  inputpercent,
  setinputpercent,
  settip,
  settotal,
  setbuttonColor,
}) {
  // const [error, seterror] = useState(false);
  useEffect(() => {
    if (inputpeople !== 0 && inputpeople !== "") {
      const percentCompute = (inputbill * inputpercent) / 100;
      settip(percentCompute / inputpeople);
      settotal((percentCompute + Number(inputbill)) / inputpeople);
    }
  }, [inputbill, inputpeople, inputpercent]);

  return (
    <ComputeContaier>
      <ComputeDivInside>
        <InputDiv>
          <h3> Bill</h3>
          <input
            value={inputbill}
            onChange={(e) => {
              setbuttonColor("#26C2AE");
              setinputbill(e.target.value);
            }}
            id="bill"
            placeholder="0"
            type="number"
          />
        </InputDiv>
        <SelectTipDiv>
          <h3> Select Tip %</h3>

          <PercentButtonsDiv>
            <PercentButtons
              value={inputpercent}
              onClick={() => {
                setbuttonColor("#26C2AE");
                setinputpercent("5");
              }}
            >
              5%
            </PercentButtons>
            <PercentButtons
              onClick={() => {
                setbuttonColor("#26C2AE");
                setinputpercent("10");
              }}
            >
              10%
            </PercentButtons>
            <PercentButtons
              onClick={() => {
                setbuttonColor("#26C2AE");
                setinputpercent("15");
              }}
            >
              15%
            </PercentButtons>
            <PercentButtons
              onClick={() => {
                setbuttonColor("#26C2AE");
                setinputpercent("25");
              }}
            >
              25%
            </PercentButtons>
            <PercentButtons
              onClick={() => {
                setbuttonColor("#26C2AE");
                setinputpercent("50");
              }}
            >
              50%
            </PercentButtons>
            <input
              id="custom"
              placeholder="Custom"
              onChange={(e) => {
                setbuttonColor("#26C2AE");
                setinputpercent(e.target.value);
              }}
            />
          </PercentButtonsDiv>
        </SelectTipDiv>
        <InputDiv2>
          <h3>
            Number of People
            <ErrorP inputpeople={inputpeople}>can't be zero </ErrorP>
          </h3>
          <StyledInput
            value={inputpeople}
            id="numberPeople"
            placeholder="0"
            type="number"
            onChange={(x) => {
              setbuttonColor("#26C2AE");
              setinputpeople(x.target.value);
            }}
            inputpeople={inputpeople}
          />
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
  @media (min-width: 1024px) {
    padding: 45px;
  }
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
    color: #00474b;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: right;
    cursor: pointer;
    :hover {
      outline: 2px solid #26c2ae;
    }

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
  @media (min-width: 1024px) {
    gap: 42px;
  }
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
  @media (min-width: 1024px) {
    gap: 14px;
  }
  input {
    height: 48px;
    width: 147.81369018554688px;
    left: 0px;
    top: 0px;
    border-radius: 5px;
    background-color: #f3f9fa;
    @media (min-width: 1024px) {
      width: 118px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ::placeholder {
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0px;
      text-align: right;
      color: #547878;
      @media (min-width: 1024px) {
        font-size: 23px;
      }
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
  :hover {
    background-color: #9fe8df;
    color: #00474b;
  }
  :focus {
    background-color: #26c2ae;
    color: #00474b;
  }
  @media (min-width: 1024px) {
    width: 117px;
  }
`;

const InputDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledInput = styled.input`
  background-image: url(${PersonImage});
  background-repeat: no-repeat;
  background-position: 19px 14px;
  outline: ${(props) => (props.inputpeople === "0" ? "2px solid red" : "none")};
`;

const ErrorP = styled.span`
  color: red;
  font-size: 15px;
  display: ${(props) => (props.inputpeople === "0" ? "block" : "none")};
`;

export default Compute;
