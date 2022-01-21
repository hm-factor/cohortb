import { useState } from 'react';
import PhotoBank from './PhotoBank';
import MerchShop from'./MerchShop';
import Panels from './Panels';

function HomePage () {
    // toggles photo and shop modals -- if one is opened while the other is already opened,
    // itll close the opposite modal
    let [isModal, setIsModal] = useState(false);
    let [isShop, setIsShop] = useState(false);

    return (
        <div className='homepage-container'>
            {/* TOP MODAL */}
            <PhotoBank isModal={isModal} setIsModal={setIsModal}/>

            {/* RIGHT MODAL */}
            <MerchShop isShop={isShop} setIsShop={setIsShop}/>

            {/* MAIN CONTENT */}
            <Panels setIsModal={setIsModal} setIsShop={setIsShop} />
        </div>
    )
}

export default HomePage;