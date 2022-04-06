import { useState } from "react";

export default function Announcements() {
    let [content, setContent] = useState('releases');


    return (
        <>
            <div className="announcement-container">
                <nav className="announcement-nav">
                    <div onClick={()=>setContent('releases')}>Releases</div>
                    <div onClick={()=>setContent('shows')}>Shows</div>
                </nav>
                <div className="announcement-container">
                    { content === 'releases' ? (
                        <div className="release-content">releases</div>
                    ) : (
                        <div className="show-content">shows</div>
                    )}
                </div>
            </div>
        </>
    )
}