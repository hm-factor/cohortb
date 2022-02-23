import { useState, useEffect } from 'react';
import vol from '../icons/vol.png';

export default function AudioPlayer(props: {url:string, play:boolean, setPlay:Function}) {
  const { url, play, setPlay } = props;

  const [audio] = useState(new Audio(url))

  useEffect(()=>{
    play ? audio.play() : audio.pause();
    if (play) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    };

    audio.addEventListener('ended', () => setPlay(false));
    return () => {
      audio.removeEventListener('ended', () => setPlay(false));
    };
  }, [audio, play, setPlay]);

  audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play()
  })

  return (
    <div className={`audio-container ${play ? 'on' : 'off'}`}>
      <img className={`${play ? 'on' : 'off'}`} src={vol} alt="vol" />
    </div>
  );
}