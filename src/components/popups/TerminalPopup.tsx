// import { useState } from "react";

interface terminalPopupProps {
    isTerminal: Boolean;
    setIsTerminal: Function;
}

export default function TerminalPopup({isTerminal, setIsTerminal}:terminalPopupProps) {

    function closeTerminal() {
        setIsTerminal(false)
    }

    return (
        <div className={`terminal-popup ${isTerminal ? '' : 'off'}`}>
            <div className="terminal-nav">
                <button className="terminal-close" onClick={closeTerminal}></button>
            </div>

            <div className="terminal-content">
                <div className="terminal-tags">
                    <div className="terminal-tag about">
                        <h3 className="about-bio">about</h3>
                    </div>
                    <div className="terminal-tag lyrics-tags">
                        <h3>lyrics</h3>
                        <div className="song-title redacted" id="traffic">traffic</div>
                        <div className="song-title redacted" id="dogbite">dogbite</div>
                        <div className="song-title redacted" id="purse">purse</div>
                        <div className="song-title" id="rust">rust</div>
                        <div className="song-title redacted" id="orca">orca</div>
                    </div>
                </div>

                <div className="terminal-about" id="terminal-about">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quibusdam, at. Optio, temporibus? Eveniet repudiandae maxime saepe 
                    deleniti. Eligendi, voluptatem aliquid blanditiis provident 
                    molestiae autem ipsum id, veritatis doloremque ullam eveniet?
                </div>

                <div className="lyrics rust">
                    are you someone 
                    that looks to be understood?
                    automatic speech 
                    giving me all i need to know
                    he left his iron by the window 
                    Watch that fuckin grin
                    the only thing i know you wont cover up

                    words have you bastardized
                    the streets were asked and your name was called
                    I keep one hand on the mic
                    only sense of control 
                    your pockets full  
                    only handing us back these clouds of rust
                    looking back 
                    i couldnt see a better face to trust
                    
                    once i had a calling
                    once i heard the whispers
                    once i came across this shining piece

                    could you imagine if your first time
                    would end up being your last time
                    make it make sense
                    this passing moment immortalized in the line between macabre and reality 
                    one in the same
                    you come to the point where you wake up before you say good night
                    if you thought this was a game, guess whos being played
                    you get so emotional about going through the motions
                    its so easy just forget you had a choice in the matter and youll be fine

                    my dad, 
                    he gave up on this city life
                    not a care 
                    not a wince
                    no sleep in his eyes
                    walk around in his boots
                    Im stepping on pebbles and mud
                    if i could be frank 
                    no one knows what this man was like
                </div>
            </div>
            
        </div>
    )
}