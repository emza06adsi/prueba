import React, { useRef } from "react";
import styled, { css } from "styled-components";
import Schedule from "../Schedule/Schedule";
import Slider from "../Slider/Slider";
import SliderController from "../SliderController/SliderController";
const Div = styled.div`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  height: 300px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.screenSizes.isMobileSmall
      ? css`
          flex-direction: column;
          justify-content: center;
        `
      : props.screenSizes.isMobileMedium
      ? css`
          flex-direction: column;
          justify-content: center;
        `
      : css`
          flex-direction: row;
        `}
`;

const Movies = (props) => {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current.handleScrollLeft -= 100;
  };

  const handleScrollRight = () => {
    scrollRef.current.handleScrollRight += 100;
  };

  return (
    <Div screenSizes={props?.screenSizes} backgroundColor={props.color}>
      {props?.screenSizes.isMobileSmall || props?.screenSizes.isMobileMedium ? (
        <>
          <div style={{ marginLeft: "80px" }}>
            <Schedule
              screenSizes={props.screenSizes}
              schedule={props.schedule}
            ></Schedule>
            <Slider
              HandleSlider={scrollRef}
              screenSizes={props.screenSizes}
              movies={props.movies}
            ></Slider>
          </div>
          <SliderController
            handleScrollLeft={handleScrollLeft}
            handleScrollRight={handleScrollRight}
            screenSizes={props.screenSizes}
            name={props.name}
          ></SliderController>
        </>
      ) : (
        <>
          {props.moviesPosition ? (
            <>
              <div style={{ marginLeft: "80px" }}>
                <Schedule
                  screenSizes={props.screenSizes}
                  schedule={props.schedule}
                ></Schedule>
                <Slider
                  screenSizes={props.screenSizes}
                  movies={props.movies}
                ></Slider>
              </div>
              <SliderController
                handleScrollLeft={handleScrollLeft}
                handleScrollRight={handleScrollRight}
                screenSizes={props.screenSizes}
                name={props.name}
              ></SliderController>
            </>
          ) : (
            <>
              <SliderController
                screenSizes={props.screenSizes}
                name={props.name}
              ></SliderController>
              <div style={{ marginLeft: "80px" }}>
                <Schedule
                  screenSizes={props.screenSizes}
                  schedule={props.schedule}
                ></Schedule>
                <Slider
                  handleScrollLeft={handleScrollLeft}
                  handleScrollRight={handleScrollRight}
                  screenSizes={props.screenSizes}
                  movies={props.movies}
                ></Slider>
              </div>
            </>
          )}
        </>
      )}
    </Div>
  );
};

Movies.propTypes = {};

Movies.defaultProps = {};

export default Movies;

// <Div screenSizes={props?.screenSizes} backgroundColor={props.color}>
//     {props.moviesPosition ? (
//       <>
//         <div style={{ marginLeft: "80px" }}>
//           <Schedule schedule={props.schedule}></Schedule>
//           <Slider
//             screenSizes={props.screenSizes}
//             movies={props.movies}
//           ></Slider>
//         </div>
//         <SliderController
//           screenSizes={props.screenSizes}
//           name={props.name}
//         ></SliderController>
//       </>
//     ) : (
//       <>
//         <SliderController
//           screenSizes={props.screenSizes}
//           name={props.name}
//         ></SliderController>
//         <div style={{ marginLeft: "80px" }}>
//           <Schedule schedule={props.schedule}></Schedule>
//           <Slider
//             screenSizes={props.screenSizes}
//             movies={props.movies}
//           ></Slider>
//         </div>

//       </>
//     )}
//   </Div>
