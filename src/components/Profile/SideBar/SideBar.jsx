import React from "react";
import "../SideBar/SideBar.css";
import avatar from "../../../assets/avatar.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default Avatar" />
      <p className="siderbar__username">User Name</p>
    </div>
  );
}

export default Sidebar;
