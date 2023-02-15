import React from "react";
// import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Div = styled.div`
  margin-top: 20px;
  height: 80px;
  border-bottom: grey solid 2px;
  text-align: start;
  color: white;

  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          width: 300px;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          width: 600px;
        `
      : css`
          width: 200px;
          margin-left: 100px;
        `}
`;
const DivLineTop = styled.div`
  width: 50px;
  height: 3px;
  background-color: grey;
`;

const ButtonContainer = styled.div`
  width: 300px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          width: 300px;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          width: 600px;
        `
      : css`
          width: 200px;
        `}
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border-color: white;
  color: white;
  margin-bottom: 10px;
  /* margin-top:10px ; */
`;

const SliderController = (props) => (
  <Div screenSizes={props?.screenSizes}>
    <DivLineTop />
    <p style={{ height: "30px" }}>{props.name}</p>
    <ButtonContainer screenSizes={props?.screenSizes}>
      <Button
        onClick={() => {
          props.handleScrollLeft();
        }}
      >
        {"<"}
      </Button>
      <Button
        onClick={() => {
          props.handleScrollRight();
        }}
      >
        {">"}
      </Button>
    </ButtonContainer>
  </Div>
);

export default SliderController;
