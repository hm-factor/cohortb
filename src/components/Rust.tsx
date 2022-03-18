import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { PhotoPopup } from "./popups/PhotoPopup";
import { InfoPopup } from "./popups/InfoPopup";
import { SoundPopup } from "./popups/SoundPopup";
import TerminalPopup from "./popups/TerminalPopup";


function NavBar() {
    
    return (
        <nav className="dogbite-nav">
            <NavLink to="/" className="cb">cb.</NavLink>
            <NavLink to="/sound" className="nav-element">sound</NavLink>
            <NavLink to="/photos" className="nav-element">photo</NavLink>
            <NavLink to="/info" className="nav-element">info</NavLink>
        </nav>
    )
}

export default function Rust() {
    let [isTerminal, setIsTerminal] = useState(false);

    return (
        <div className="dogbite-main">
            <div className='cohort-b'>COHORT B</div>
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
    )
}