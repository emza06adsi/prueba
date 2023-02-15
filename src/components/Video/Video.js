import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          height: 50%;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          height: 50%;
        `
      : css`
          height: none;
        `}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background: none;
  border-color: white;
`;

const TrianguloPlay = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 16px solid #2583a9;
`;

const BotonPlay = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border: none;
`;

const Video = (props) => (
  <Div screenSizes={props?.screenSizes}>
    <Button
      onClick={() => {
        props.openModal();
      }}
    >
      <BotonPlay>
        <TrianguloPlay />
      </BotonPlay>
    </Button>

    {/* <video width="320" height="240" controls>
      <source
        src=""
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video> */}
  </Div>
);

export default Video;
