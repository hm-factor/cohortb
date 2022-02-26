import { useState } from "react"

function Popup(props: {contentType:string}) {
    let {contentType} = props;

    return (
        <div className={`popup-content ${contentType ? '' : 'off'}`}>
            <div className={`popup-links ${contentType==='sound' ? '' : 'off'}`}>
                <a href="https://cohortbbb.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>    
                <a href="https://open.spotify.com/artist/1rnMxenrTZyuttAhlEC5H2" target="_blank" rel="noreferrer">spotify</a>    
                <a href="https://music.apple.com/us/artist/cohort-b/1609006188" target="_blank" rel="noreferrer">applemusic</a>    
                <a href="https://www.youtube.com/channel/UCh8srATnzpEeTg2J5yWLslg" target="_blank" rel="noreferrer">youtube</a>    
            </div>
            <div className={`popup-links ${contentType==='photo' ? '' : 'off'}`}>{contentType}</div>
            <div className={`popup-links ${contentType==='shows' ? '' : 'off'}`}>
                <a href="https://linktr.ee/cohortb" target="_blank" rel="noreferrer">linktree</a>
            </div>
        </div>
    )
}

export default function Rust() {

    let [isContent, setIsContent] = useState('');

    let handleClick = (contentType:string):void => {
        isContent===contentType ? setIsContent('') : setIsContent(contentType)
    }

    return (
        <div className="rust-main">
            <div className="cb-mobile">cb.</div>
            <Popup contentType={isContent}/>
            <div className="rust-nav">
                <div className="cb">cb.</div>
                <div className="nav-element" onClick={() => handleClick('sound')}>sound</div>
                <div className="nav-element" onClick={() => handleClick('photo')}>photo</div>
                <div className="nav-element" onClick={() => handleClick('shows')}>shows</div>
            </div>
        </div>
    )
}