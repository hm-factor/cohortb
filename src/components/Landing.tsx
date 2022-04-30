import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { PhotoPopup } from "./popups/PhotoPopup";
import { InfoPopup } from "./popups/InfoPopup";
import { SoundPopup } from "./popups/SoundPopup";
import TerminalPopup from "./popups/TerminalPopup";
import Announcements from "./Announcements/Announcements";

import polaroid from '../art/ep_polaroid.png';
import cohort_logo from '../art/cohort_logo.PNG';

import { AppBar, Box} from "@mui/material";
import camera from "../icons/camera.png"
import ear from "../icons/ear.png"
import shows from "../icons/show.png"
import info from "../icons/info.png"

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

function MobileNavBar() {

    const NavLinkInfo = [
        {link:"/sound", btnIcon:ear},
        {link:"/announcements", btnIcon:shows},
        {link:"/photos", btnIcon:camera},
        {link:"/info", btnIcon:info},
    ]

    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                top: 'auto', 
                bottom: 0, 
                backgroundColor: "rgb(28, 28, 28)",
            }}
        >
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-evenly",
                    backgroundColor:"rgb(236, 224, 192)"
                }}
            >
                {NavLinkInfo.map((NavLinkItem) => {
                    let {link, btnIcon} = NavLinkItem;

                    return (
                        <NavLink to={`${link}`} className="nav-element">
                            <img src={btnIcon} alt="ha" />
                        </NavLink>
                    )
                })}
            </Box>
        </AppBar>
    )
}

export default function Landing() {
    const [isTerminal, setIsTerminal] = useState<boolean>(false);
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [mobile, setMobile] = useState<boolean>(dimensions.width <= 900)

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
        setMobile(dimensions.width <= 900)
    }, [dimensions.width])

    return (
        <div className="background-container">
            <div className="react-player-wrapper">
                <video autoPlay loop muted className="react-player" >
                    <source src='/videos/orca_loop.mp4' type="video/mp4"/>
                </video>
            </div>
            <div className="LWU-main">
                {mobile && (
                    <NavLink to="/" className="cohort-logo-mobile">
                        <img src={cohort_logo} alt="cohort-logo" />    
                    </NavLink>
                )}
                <img src={polaroid} alt="polaroid" className="polaroid"/>
                <TerminalPopup isTerminal={isTerminal} setIsTerminal={setIsTerminal}/>
                {mobile ? <MobileNavBar/> : <NavBar/>}
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