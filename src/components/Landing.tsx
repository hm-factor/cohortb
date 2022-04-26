import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { PhotoPopup } from "./popups/PhotoPopup";
import { InfoPopup } from "./popups/InfoPopup";
import { SoundPopup } from "./popups/SoundPopup";
import TerminalPopup from "./popups/TerminalPopup";
import Announcements from "./Announcements/Announcements";


function NavBar() {
    let location = useLocation();
    
    return (
        <nav className="LWU-nav">
            <NavLink to="/" className="cb">{location.pathname === '/' ? 'cb.' : 'x'}</NavLink>
            <NavLink to="/sound" className="nav-element">sound</NavLink>
            <NavLink to="/photos" className="nav-element">photo</NavLink>
            <NavLink to="/info" className="nav-element">info</NavLink>
        </nav>
    )
}

export default function Landing() {
    let [isTerminal, setIsTerminal] = useState(false);

    return (
        <div className="background-container">
            <div className="LWU-main">
                {/* <div className='cohort-b'>COHORT B</div> */}
                <Announcements/>
                <div className="cb-container">
                    <div className="cb-mobile">cb.</div>
                </div>
                <TerminalPopup isTerminal={isTerminal} setIsTerminal={setIsTerminal}/>
                <NavBar/>
                <Routes>
                    <Route path="sound" element={<SoundPopup />} />
                    <Route path="photos" element={<PhotoPopup />} />
                    <Route path="info" element={<InfoPopup isTerminal={isTerminal} setIsTerminal={setIsTerminal}/>} />
                </Routes>
            </div>
        </div>
    )
}