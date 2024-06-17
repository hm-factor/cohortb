import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import { InfoPopup } from "./popups/InfoPopup";
import TerminalPopup from "./popups/TerminalPopup";
import Announcements from "./Announcements/Announcements";
import Epk from "./Epk";

import blue_face_snafu from "../art/blue_face_snafu.PNG";
import cohort_logo_mobile from "../art/cohort_logo_mobile.PNG";

const MobileLanding = () => {
  return (
    <div className="landing-main">
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
    setMobile(dimensions.width <= 600);
  }, [dimensions.width]);

  return (
    <div className="background-container">
      <div className="background-wrapper">
        <img src={blue_face_snafu} alt="blue-snafu" />
      </div>
      {mobile ? (
        <MobileLanding />
      ) : (
        <div className="landing-main">
          <NavBar />
          <TerminalPopup
            isTerminal={isTerminal}
            setIsTerminal={setIsTerminal}
          />
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
