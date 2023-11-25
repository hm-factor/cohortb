import React, { useState } from "react";
import ShowContent from "./ShowContent";
import ReleaseContent from "./ReleaseContent";

export default function Announcements() {
  let [content, setContent] = useState("shows");

  return (
    <div className="announcement-container">
      <nav className="announcement-nav">
        <div
          className={`announcement-nav-element ${
            content === "shows" ? "nav-selected" : ""
          }`}
          onClick={() => setContent("shows")}
        >
          SHOWS
        </div>
        <div
          className={`announcement-nav-element ${
            content === "releases" ? "nav-selected" : ""
          }`}
          onClick={() => setContent("releases")}
        >
          RELEASES
        </div>
      </nav>
      {content === "releases" ? <ReleaseContent /> : <ShowContent />}
    </div>
  );
}
