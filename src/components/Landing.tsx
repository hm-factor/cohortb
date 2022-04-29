import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { PhotoPopup } from "./popups/PhotoPopup";
import { InfoPopup } from "./popups/InfoPopup";
import { SoundPopup } from "./popups/SoundPopup";
import TerminalPopup from "./popups/TerminalPopup";
import Announcements from "./Announcements/Announcements";

import polaroid from '../art/ep_polaroid.png';
import cohort_logo from '../art/cohort_logo.PNG';

import { AppBar, Button, Menu, MenuItem, Box } from "@mui/material";

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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                top: 'auto', 
                bottom: 0, 
                backgroundColor: "rgb(28, 28, 28)",
                // display: 'flex',
                // flexDirection: 'row',
                // justifyContent: 'space-around',
            }}
        >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="secondary"
            >
                menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {/* <MenuItem onClick={handleClose}>
                     <NavLink to="/sound" className="nav-element">SOUND</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                     <NavLink to="/announcements" className="nav-element">ANNOUNCEMENTS</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                     <NavLink to="/photos" className="nav-element">PHOTOS</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                     <NavLink to="/info" className="nav-element">INFO</NavLink>
                </MenuItem> */}
                <MenuItem>
                    <Box
                        sx={{
                            display: 'grid',
                            gap: 1,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <NavLink to="/sound" className="nav-element">SOUND</NavLink>
                        <NavLink to="/announcements" className="nav-element">ANNOUNCEMENTS</NavLink>
                        <NavLink to="/photos" className="nav-element">PHOTOS</NavLink>
                        <NavLink to="/info" className="nav-element">INFO</NavLink>
                    </Box>
                </MenuItem>
            </Menu>
        </AppBar>
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
                {/* <NavBar/> */}
                <MobileNavBar/>
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