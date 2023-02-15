import React from "react";
import PropTypes from "prop-types";
import styles from "./Slider.module.styl";
import styled, { css } from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  align-items: center;
  justify-content: center;
  height: 200px;
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
          width: 800px;
        `}
`;

const ImageContainer = styled.div`
  width: 200%;

  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          flex: 0 0 33.33%;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          flex-basis: 16.66%;
        `
      : css`
          flex-basis: 16.66%;
        `}
`;

const DescriptionContainer = styled.div`
  display: flex;

  p {
    color: grey;
    margin: 5px;
    font-size: 10px;
  }
`;

const Name = styled.p`
  color: white;
  margin: 5px;
  font-size: 12px;
  text-align: left;
`;

const Slider = (props) => (
  <SliderContainer
    ref={props.HandleSlider}
    style={{ display: "flex", overflowX: "scroll" }}
    screenSizes={props.screenSizes}
  >
    {props.movies.map(({ name, url, year, category }) => (
      <ImageContainer screenSizes={props.screenSizes}>
        <img src={url.url} width={"80px"} height={"100px"} />
        <div>
          <DescriptionContainer>
            <p>{category},</p>
            <p>{year}</p>
          </DescriptionContainer>
        </div>
        <Name>{name}</Name>
      </ImageContainer>
    ))}
  </SliderContainer>
);

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
