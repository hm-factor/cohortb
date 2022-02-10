import { useState, useEffect } from 'react';

export default function AudioPlayer(props: {url:string}) {
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
  }, [audio, play]);

  const handleToggle = () => {
    setPlay(!play)
  };

  audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play()
  })

  return (
    <div className="btn-container">
      <button onClick={() => handleToggle()} className={`sound-btn ${play ? 'on' : ''}`} />
    </div>
  );
}