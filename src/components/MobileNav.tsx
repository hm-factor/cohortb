import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, styled } from "@mui/material";
import shows from "../icons/show.png";
import info from "../icons/info.png";

function MobileNavBar() {
  const NavLinkInfo = [
    { link: "/announcements", btnIcon: shows },
    { link: "/info", btnIcon: info },
  ];

  const MobileNav = styled(AppBar)({
    position: "fixed",
    top: "auto",
    bottom: 0,
    backgroundColor: "transparent",
  });

  const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    [`& img`]: {
      filter: "grayscale(1) invert(1)",
    },
  });

  return (
    <MobileNav>
      <StyledBox>
        {NavLinkInfo.map((NavLinkItem) => {
          let { link, btnIcon } = NavLinkItem;

          return (
            <NavLink to={`${link}`} className="nav-element">
              <img src={btnIcon} alt="ha" />
            </NavLink>
          );
        })}
      </StyledBox>
    </MobileNav>
  );
}

export default MobileNavBar;
