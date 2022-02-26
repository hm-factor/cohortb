import { useState } from 'react';
import MinNav from './MinNav';
import acid from '../vids/Acid-Headbang.gif';
// import LinkModal from './LinkModal';

export default function MinimalHome() {

    // let [ isModalType, setModalType ] = useState('');

    return (
        <div className='gif-main'>
            <MinNav/>
            {/* <LinkModal/> */}
            <img src={acid} alt="gang"/>
        </div>   
    )
}