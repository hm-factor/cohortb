import React, { useState, useEffect } from 'react';

export default function AudioPlayer(props) {
  const { url } = props;

  const [audio] = useState(new Audio(url));
  const [play, setPlay] = useState(false);

  useEffect(()=>{
    play ? audio.play() : audio.pause();
    if (play) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [play]);

  const handleToggle = () => {
    setPlay(!play)
  };

  audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play()
  })

  return (
    <div>
      <button 
        onClick={()=>handleToggle()}
        className="sound-btn"
      />
    </div>
  )
}