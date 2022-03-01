interface terminalPopupProps {
    isTerminal: Boolean;
    setIsTerminal: Function;
}

export function InfoPopup({isTerminal, setIsTerminal}:terminalPopupProps) {

    function openTerminal() {
        setIsTerminal(true)
    }
    return (
        <div className="popup-content">
            <div className={"popup-links shows"}>
                <a href="https://linktr.ee/cohortb" target="_blank" rel="noreferrer">linktree</a>
                <a href="https://www.instagram.com/cohortbbb/" target="_blank" rel="noreferrer">instagram</a>
                <p onClick={openTerminal}>terminal</p>
            </div>
        </div>
    )
}