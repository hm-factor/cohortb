import React from "react";
import { NavLink } from "react-router-dom";
import cohort_logo from "../art/cohort_logo.PNG";

function NavBar() {
  const [currPath, setCurrPath] = React.useState(window.location.pathname);

  return (
    <div className={`${currPath === "/epk" ? "epk-nav" : "LWU-nav"}`}>
      <NavLink to="/" className="cohort-logo" onClick={() => setCurrPath("/")}>
        <img src={cohort_logo} alt="cohort-logo" className="cohort-logo" />
      </NavLink>
      <div
        className={`${
          currPath === "/epk" ? "epk-nav-elements" : "LWU-nav-elements"
        }`}
      >
        <NavLink
          to="/announcements"
          className="nav-element"
          onClick={() => setCurrPath("/announcements")}
        >
          ANNOUNCEMENTS
        </NavLink>
        <NavLink
          to="/info"
          className="nav-element"
          onClick={() => setCurrPath("/info")}
        >
          INFO
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
