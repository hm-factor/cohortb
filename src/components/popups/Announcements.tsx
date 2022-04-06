import { useState } from "react";

export default function Announcements() {
    let [content, setContent] = useState('releases');

    return (
        <div className="announcement-container">
            <nav className="announcement-nav">
                <div className={`announcement-nav-element ${content==='releases' ? 'nav-selected' : ''}`} onClick={()=>setContent('releases')}>Releases</div>
                <div className={`announcement-nav-element ${content==='shows' ? 'nav-selected' : ''}`} onClick={()=>setContent('shows')}>Shows</div>
            </nav>
            <div className="announcement-content">
                { content === 'releases' ? (
                    <div className="release-content">releases</div>
                ) : (
                    <div className="show-content">shows</div>
                )}
            </div>
        </div>
    )
}