import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import { InfoPopup } from "./popups/InfoPopup";
import TerminalPopup from "./popups/TerminalPopup";
import Announcements from "./Announcements/Announcements";
import Epk from "./Epk";

import cohort_logo_mobile from "../art/cohort_logo_mobile.PNG";

const MobileLanding = () => {
  return (
    <div className="LWU-main">
      <Announcements />
      <div className="mobile-banner">
        <NavLink to="/" className="cohort-logo-mobile">
          <img src={cohort_logo_mobile} alt="cohort-logo_mobile" />
        </NavLink>
      </div>
    </div>
  );
};

export default function Landing() {
  const [isTerminal, setIsTerminal] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [mobile, setMobile] = useState<boolean>(dimensions.width <= 1024);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    setMobile(dimensions.width <= 900);
  }, [dimensions.width]);

  return (
    <div className="background-container">
      <div className="react-player-wrapper">
        <video autoPlay loop muted className="react-player">
          <source src="/videos/yee_promo.mp4" type="video/mp4" />
        </video>
      </div>
      {mobile ? (
        <MobileLanding />
      ) : (
        <div className="LWU-main">
          <TerminalPopup
            isTerminal={isTerminal}
            setIsTerminal={setIsTerminal}
          />
          <NavBar />
          <Routes>
            <Route path="announcements" element={<Announcements />} />
            <Route
              path="info"
              element={
                <InfoPopup
                  isTerminal={isTerminal}
                  setIsTerminal={setIsTerminal}
                  isMobile={mobile}
                />
              }
            />
            <Route path="epk" element={<Epk />} />
          </Routes>
        </div>
      )}
    </div>
  );
}
