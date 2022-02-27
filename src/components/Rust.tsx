import { Routes, Route, NavLink } from "react-router-dom";
import { PhotoPopup } from "./popups/PhotoPopup";
import { InfoPopup } from "./popups/InfoPopup";
import { SoundPopup } from "./popups/SoundPopup";


function NavBar() {
    return (
        <nav className="rust-nav">
            <NavLink to="/" className="cb">cb.</NavLink>
            <NavLink to="/sound" className="nav-element" >sound</NavLink>
            <NavLink to="/photos" className="nav-element">photo</NavLink>
            <NavLink to="/info" className="nav-element">info</NavLink>
        </nav>
    )
}

export default function Rust() {
    return (
        <div className="rust-main">
            <div className="cb-mobile">cb.</div>
            <NavBar />
            <Routes>
                <Route path="photos" element={<PhotoPopup />} />
                <Route path="info" element={<InfoPopup />} />
                <Route path="sound" element={<SoundPopup />} />
            </Routes>
        </div>
    )
}