import { useEffect, useState } from 'react';
import PhotoBank from './PhotoBank';
import MerchShop from'./MerchShop';
import Panels from './Panels';
import AudioPlayer from './AudioPlayer';

import rust from '../sound/chrt_clip.mp3';
import purse from '../sound/purr.mp3';
import dog from '../sound/dgbit.mp3';
import traffic from '../sound/traffic.mp3';
import orca from '../sound/orc_end.mp3';

import vid from '../vids/freda.MOV';

function HomePage () {
    // toggles photo and shop modals -- if one is opened while the other is already opened,
    // itll close the opposite modal
    let [isModal, setIsModal] = useState(false);
    let [isShop, setIsShop] = useState(false);

    let [song, setSong] = useState('');
    let [url, setUrl] = useState('');
    let [play, setPlay] = useState(false);

    let valid_titles = {
        'rust': rust,
        'dog': dog,
        'orca': orca,
        'traffic': traffic,
        'purse': purse
    }

    const handleChange = (event: any): void => {
        setSong(event.target.value)
    }

    const handleToggle = () => {
        setPlay(false)
        setSong('')
    };

    useEffect(() =>{
        if (Object.keys(valid_titles).includes(song)) {
            setPlay(true)
            // setUrl(valid_titles[song])  
        } else {
            setPlay(false)
        }
    }, [song, setPlay, setUrl, url])

    return (
        <div className='homepage-container'>
            {/* cheat codes */}
            <input onChange={handleChange} value={song} placeholder="COHORT B" className='hidden-input'/>
            <div onClick={handleToggle}>
                <AudioPlayer url={rust} play={play} setPlay={setPlay}/>
            </div>

            <video className='video-main' autoPlay loop muted controls>
                <source src={vid} type="video/mp4"/>
            </video>

            {/* TOP MODAL */}
            <PhotoBank isModal={isModal} setIsModal={setIsModal}/>

            {/* RIGHT MODAL */}
            <MerchShop isShop={isShop} setIsShop={setIsShop}/>

            {/* MAIN CONTENT */}
            <Panels setIsModal={setIsModal} setIsShop={setIsShop} />
        </div>
    )
}

export default HomePage;