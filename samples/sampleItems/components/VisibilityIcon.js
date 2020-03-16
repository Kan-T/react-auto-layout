import React from "react";
import imgVisibility from "../../img/visibility.svg";
import imgVisibilityOff from "../../img/visibility-off.svg";

function VisibilityIcon({showDemoTitle, toggleDemoTitle}) {
  return (
    <img alt="Visibility" title="toggle 'name demo'"
      src={showDemoTitle ? imgVisibilityOff : imgVisibility}
      className="icon" 
      onClick={toggleDemoTitle}
    />
  );
}

export default VisibilityIcon;