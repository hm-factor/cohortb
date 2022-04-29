import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { PhotoPopup } from "./popups/PhotoPopup";
import { InfoPopup } from "./popups/InfoPopup";
import { SoundPopup } from "./popups/SoundPopup";
import TerminalPopup from "./popups/TerminalPopup";
import Announcements from "./Announcements/Announcements";

import polaroid from '../art/ep_polaroid.png';
import cohort_logo from '../art/cohort_logo.PNG';


function NavBar() {
    
    return (
        <nav className="LWU-nav">
            <NavLink to="/" className="cohort-logo">
                <img src={cohort_logo} alt="cohort-logo" />    
            </NavLink>
            <div className="LWU-nav-elements">
                <NavLink to="/sound" className="nav-element">SOUND</NavLink>
                <NavLink to="/announcements" className="nav-element">ANNOUNCEMENTS</NavLink>
                <NavLink to="/photos" className="nav-element">PHOTO</NavLink>
                <NavLink to="/info" className="nav-element">INFO</NavLink>
            </div>
        </nav>
    )
}

export default function Landing() {
    let [isTerminal, setIsTerminal] = useState(false);

    return (
        <div className="background-container">
            <div className="react-player-wrapper">
                <video autoPlay loop muted className="react-player" >
                    <source src='/videos/orca_loop.mp4' type="video/mp4"/>
                </video>
            </div>
            <div className="LWU-main">
                <img src={polaroid} alt="polaroid" className="polaroid"/>
                <TerminalPopup isTerminal={isTerminal} setIsTerminal={setIsTerminal}/>
                <NavBar/>
                <Routes>
                    <Route path="sound" element={<SoundPopup />} />
                    <Route path="announcements" element={<Announcements />} />
                    <Route path="photos" element={<PhotoPopup />} />
                    <Route path="info" element={<InfoPopup isTerminal={isTerminal} setIsTerminal={setIsTerminal}/>} />
                </Routes>
            </div>
        </div>
    )
}