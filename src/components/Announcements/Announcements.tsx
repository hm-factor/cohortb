import { useState } from "react";
import ShowContent from './ShowContent';
import ReleaseContent from './ReleaseContent';

export default function Announcements() {
    let [content, setContent] = useState('releases');

    return (
        <div className="announcement-container">
            <nav className="announcement-nav">
                <div 
                    className={`announcement-nav-element ${content==='releases' ? 'nav-selected' : ''}`} 
                    onClick={()=>setContent('releases')}>Releases</div>
                <div 
                    className={`announcement-nav-element ${content==='shows' ? 'nav-selected' : ''}`} 
                    onClick={()=>setContent('shows')}>Shows</div>
            </nav>
            <div className="announcement-content">
                { content === 'releases' ? (
                    <ReleaseContent/>
                ) : (
                    <ShowContent/>
                )}
            </div>
        </div>
    )
}