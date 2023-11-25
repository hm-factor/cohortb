import React from "react";
interface terminalPopupProps {
  isTerminal: Boolean;
  setIsTerminal: Function;
  isMobile: Boolean;
}

export function InfoPopup({
  isTerminal,
  setIsTerminal,
  isMobile,
}: terminalPopupProps) {
  function openTerminal() {
    setIsTerminal(true);
  }
  return (
    <div className="popup-content">
      <div className={"popup-links shows"}>
        <a
          href="https://cohortbbb.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          bandcamp
        </a>
        <a
          href="https://www.instagram.com/cohortbbb/"
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
        <a
          href="https://twitter.com/COHORTB_nyc"
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>
        {!isMobile && <p onClick={openTerminal}>terminal</p>}
      </div>
    </div>
  );
}
