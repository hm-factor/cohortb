import React, { useState } from "react";

const Player = () => {
  const [audio] = useState(new Audio("/songs/snafu_short.mp3"));
  function hoverPlay() {
    console.log("snafu");
    audio.play();
  }
  function stopPlay() {
    audio.pause();
    audio.currentTime = 0;
  }
  return (
    <div
      onMouseOver={hoverPlay}
      onMouseLeave={stopPlay}
      id="what"
      className="what"
    >
      ...what?
    </div>
  );
};

export default Player;
