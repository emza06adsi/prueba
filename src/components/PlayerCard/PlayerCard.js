import React from "react";
import PropTypes from "prop-types";
import styles from "./PlayerCard.module.styl";
import withScreenSizes from "../WithScreenSizes/WithScreenSizes";
import styled, { css } from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          padding-top: 40px;
          padding-left: 20px;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          padding-top: 50px;
          padding-left: 40px;
        `
      : css`
          padding-top: 50px;
          padding-left: 80px;
          margin-bottom: 30px;
        `}
`;

const H1 = styled.div`
  color: white;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;
  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          font-size: 24px;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          font-size: 32px;
        `
      : css`
          font-size: 44px;
        `}
`;

const P = styled.p`
  /* background-color: green; */
  display: flex;

  text-align: left;
  color: white;
  font-weight: 200;
  font-family: Arial, Helvetica, sans-serif;
  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          font-size: 16px;
          width: 300px;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          font-size: 24px;
          width: 500px;
        `
      : css`
          font-size: 32px;
          width: 650px;
        `}
`;

const ButtonContainer = styled.div`
  background: none;
  border: none;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${(props) => (props.color ? "#23b7fb" : "transparent")};
  border: ${(props) => (props.color ? "none" : "1px solid white")};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const PlayerCard = (props) => (
  <Div screenSizes={props?.screenSizes}>
    <H1 screenSizes={props?.screenSizes}>{props.playerCard.title} </H1>
    <P screenSizes={props?.screenSizes}>{props.playerCard.context}</P>
    <ButtonContainer screenSizes={props?.screenSizes}>
      {props.playerCard.buttons.map(({ title, color, id }) => (
        <Button key={id} color={color} screenSizes={props?.screenSizes}>
          {title}
        </Button>
      ))}
    </ButtonContainer>
  </Div>
);

export default PlayerCard;
