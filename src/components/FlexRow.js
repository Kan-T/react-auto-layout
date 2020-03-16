import React from "react";

const fixedStyles = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  flexWrap: "wrap"
};

const FlexRow = ({className, style, children}) => {

  return (
    <div className={`${className||""}`} style={{...style, ...fixedStyles}}>
      {children}
    </div>
  );
};

export default FlexRow;
