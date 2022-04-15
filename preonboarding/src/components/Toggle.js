import React from "react";
import "../styles/Toggle.scss";
import {useState} from "react";

const Toggle = () => {
  const [istoggle, setToggle] = useState(false);
  const toggleHandling = () => {};

  return (
    <div className="toggle-wrapper">
      <div className="primary-wrap">기본</div>
      <div className="detail-wrap">상세</div>
    </div>
  );
};

export default Toggle;
