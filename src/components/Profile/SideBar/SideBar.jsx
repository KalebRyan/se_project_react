import React from "react";
import "../SideBar/SideBar.css";
import avatar from "../../../assets/avatar.png";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import { useContext } from "react";

function Sidebar({ handleEditProfileClick, handleSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__header-wrapper">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar || avatar}
          alt="User Avatar"
        />
        <p className="sidebar__username">{currentUser?.name || "User Name"}</p>
      </div>
      <button className="sidebar__button" onClick={handleEditProfileClick}>
        Edit Profile
      </button>
      <button className="sidebar__button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
