import { useState } from "react";
import ShowContent from './ShowContent';
import ReleaseContent from './ReleaseContent';

export default function Announcements() {
    let [content, setContent] = useState('releases');
    let [exit, setExit] = useState(false);

    function closeAnnouncements() {
        setExit(true);
    }
    function openAnnouncements() {
        setExit(false);
    }

    return (
        <>
            <nav className={`announcement-open ${exit ? '' : 'off'}`} onClick={openAnnouncements}>
                announcements
            </nav>
            <div className={`announcement-container ${exit ? 'off' : ''}`}>
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
                <div className="announcement-footer" onClick={closeAnnouncements}>
                    Exit.
                </div>
            </div>
        </>
    )
}