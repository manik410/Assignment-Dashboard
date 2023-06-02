import React from "react";
import HomeIcon from "../images/home.png";
import "./Sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src={HomeIcon}
        height={"20px"}
        alt="actionIcon"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
export default Sidebar;
