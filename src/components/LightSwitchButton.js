// import React, { useState } from "react";
// Since we don't HAVE to import React explicitly, we can also just type this:
import { useState } from "react";

function LightSwitchButton(props) {
  const { light, setLight } = props;
  const handleClick = () => setLight();

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === 'on' && <span><i>💡</i> I'm on!</span>}
      {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;