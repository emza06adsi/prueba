import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 360px;
  height: 40px;
  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          justify-content: space-evenly;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          justify-content: space-evenly;
        `
      : css`
          justify-content: space-between;
        `}
`;

const Nav = styled.nav`
  color: white;
  opacity: 0.5;
  :hover {
    color: #2583a9;
    opacity: 1;
  }
`;

const Schedule = (props) => (
  <Div screenSizes={props?.screenSizes}>
    {props.schedule.map((option) => (
      <Nav>{option}</Nav>
    ))}
  </Div>
);

Schedule.propTypes = {};

Schedule.defaultProps = {};

export default Schedule;
