import './App.css';
import React, {useEffect} from 'react';
import AudioPlayer from './components/AudioPlayer';
import s1 from './sound/chrt_clip.mp3';
// import s2 from './sound/dgbit.mp3';
import s3 from './sound/orc_end.mp3';
import s4 from './sound/orc_mid.mp3';
import s5 from './sound/purr.mp3';
import s6 from './sound/traffic.mp3';

import pound_2 from './art/pound_2.jpg';
import trans_img from './art/ep_art_bandname.jpg'

function App() {
  const audio = new Audio(s3);
  const hoverAudio = null;
  useEffect(()=> {
    const hoverAudio = document.getElementById("hover");

    hoverAudio.addEventListener("mouseover", function() {
      audio.play()
    })
    hoverAudio.addEventListener("mouseout", function() {
      audio.pause()
      audio.currentTime = 0;
    })
  },[])


  return (
    <div className="main">
      <div className="art" id="hover">
        <img src={pound_2} alt={"pound"} className="pound-logo"/>
        <img src={trans_img} alt={"ep"} className="ep-logo"/>
        <div className="title">lukewarm december 2021</div>
      </div>
      <div className="toggle-1">
        <AudioPlayer url={s1} />
      </div>
      <div className="toggle-2">
        <AudioPlayer url={s4} className="toggle-2"/>
      </div>
      <div className="toggle-3">
        <AudioPlayer url={s5}/>
      </div>
      <div className="toggle-4">
        <AudioPlayer url={s6} className="toggle-4"/>
      </div>
    </div>
  );
}

export default App;
