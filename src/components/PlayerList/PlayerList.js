import React from "react";
import PropTypes from "prop-types";
import Video from "../Video/Video";
import PlayerCard from "../PlayerCard/PlayerCard";
import styled, { css } from "styled-components";

const Div = styled.div`
  width: 100%;
  background-color: #252b39;
  display: flex;
  /* height: 300px; */
  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          font-size: 16px;
          height: 100vh;
          flex-direction: column;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          font-size: 20px;
          flex-direction: column;
          height: 100vh;
        `
      : css`
          font-size: 24px;
          flex-direction: row;
        `}
`;

const PlayerList = (props) => (
  <Div screenSizes={props?.screenSizes}>
    <PlayerCard
      screenSizes={props.screenSizes}
      playerCard={props?.playerListData.playerCard}
    ></PlayerCard>
    <Video openModal={props.openModal} screenSizes={props.screenSizes}></Video>
  </Div>
);
// { video, playerCard, screenSizes }

PlayerList.propTypes = {};

PlayerList.defaultProps = {};

export default PlayerList;
