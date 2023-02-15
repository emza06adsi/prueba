import React, { useState, useEffect } from "react";

function withScreenSizes(Component) {
  return function WrappedComponent(props) {
    const [screenSizes, setScreenSizes] = useState({
      width: window.innerWidth,
      isMobileSmall: window.innerWidth <= 360,
      isMobileMedium: window.innerWidth <= 768,
      isMobileLarge: window.innerWidth <= 1440,
    });

    useEffect(() => {
      function handleResize() {
        const width = window.innerWidth;

        setScreenSizes({
          width: width,
          isMobileSmall: width <= 360,
          isMobileMedium: width <= 768,
          isMobileLarge: width <= 1440,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <Component screenSizes={screenSizes} {...props} />;
  };
}

export default withScreenSizes;
