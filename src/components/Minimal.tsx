import MinNav from './MinNav';
import acid from '../vids/Acid-Headbang.gif';

export default function MinimalHome() {

    return (
        <div className='gif-main'>
            <MinNav/>
            <img src={acid} alt="gang"/>
        </div>   
    )
}