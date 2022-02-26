import { useState } from "react"

import hodge from '../art/hodge.jpg'
import logo_1 from '../art/logo_1.jpg'
import neg_trees from '../art/neg_trees.jpg'
import pool from '../art/pool.jpg'
import trees from '../art/trees.jpg'
// import trash from '../art/trash.png'

function Popup(props: {contentType:string}) {
    let {contentType} = props;

    let photos = [hodge, logo_1, neg_trees, pool, trees]

    let photoContent = photos.map((el,idx)=>{
        return (
            <div className="photo-content">
                <img src={el} alt={el} className="photo-element"/>
            </div>
        )
    })

    return (
        <div className={`popup-content ${contentType ? '' : 'off'}`}>
            <div className={`popup-links ${contentType==='sound' ? '' : 'off'}`}>
                <a href="https://cohortbbb.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>    
                <a href="https://open.spotify.com/artist/1rnMxenrTZyuttAhlEC5H2" target="_blank" rel="noreferrer">spotify</a>    
                <a href="https://music.apple.com/us/artist/cohort-b/1609006188" target="_blank" rel="noreferrer">applemusic</a>    
                <a href="https://www.youtube.com/channel/UCh8srATnzpEeTg2J5yWLslg" target="_blank" rel="noreferrer">youtube</a>    
            </div>
            <div className={`popup-photo ${contentType==='photo' ? '' : 'off'}`}>
                {photoContent}    
            </div>
            <div className={`popup-links ${contentType==='shows' ? '' : 'off'}`}>
                <a href="https://linktr.ee/cohortb" target="_blank" rel="noreferrer">linktree</a>
                <a href="https://www.instagram.com/cohortbbb/" target="_blank" rel="noreferrer">instagram</a>
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
            <div className="content-mobile">
                <Popup contentType={isContent}/>
            </div>
            <div className="rust-nav">
                <div className="cb">cb.</div>
                <div className="nav-element" onClick={() => handleClick('sound')}>sound</div>
                <div className="nav-element" onClick={() => handleClick('photo')}>photo</div>
                <div className="nav-element" onClick={() => handleClick('shows')}>info</div>
            </div>
        </div>
    )
}