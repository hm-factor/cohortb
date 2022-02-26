import { useState } from "react"

function Popup(props: {contentType:string}) {
    let {contentType} = props;

    return (
        <div className={`popup-content ${contentType ? '' : 'off'}`}>
            {contentType}
        </div>
    )
}

export default function Rust() {

    let [isContent, setIsContent] = useState('');

    let handleClick = (contentType:string):void => {
        isContent===contentType ? setIsContent('') : setIsContent(contentType)
    }

    return (
        <div className="rust-main">
            <div className="cb-mobile">cb.</div>
            <div className="popup">
                <Popup contentType={isContent}/>
            </div>
            <div className="rust-nav">
                <div className="cb">cb.</div>
                <div className="nav-element" onClick={() => handleClick('sound')}>sound</div>
                <div className="nav-element" onClick={() => handleClick('photo')}>photo</div>
                <div className="nav-element" onClick={() => handleClick('shows')}>shows</div>
            </div>
        </div>
    )
}