import React from "react";

const fixedStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch"
};

const FlexCol = ({className, style, children}) => {

  return (
    <div className={`${className||""}`} style={{...style, ...fixedStyles}}>
      {children}
    </div>
  );
};

export default FlexCol;