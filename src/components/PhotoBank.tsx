import React, { useState } from 'react';

import trash from '../art/trash.png';
import ep_art from '../art/ep_art.jpg';
import trees from '../art/trees.jpg';
import hodge from '../art/hodge.jpg';
import neg_trees from '../art/neg_trees.jpg';
import logo_1 from '../art/logo_1.jpg';
import pool from '../art/pool.jpg';

type PhotoBankProps = {
    isModal: Boolean,
    setIsModal: Function
}

export default function PhotoBank ({isModal, setIsModal}: PhotoBankProps) {

    let [isGrow, setIsGrow] = useState('');

    function photoGrow (alt: string):void {
        if (!isGrow) {
            setIsGrow(alt);
        } else {
            setIsGrow('');
        }
    }
    
    function closeModal ():void {
        setIsGrow('');
        setIsModal(false);
    }

    return (
        <>
            <div className={`dropdown-top ${isModal ? 'modal-on' : ''}`}>
                photos here.
                <div className='photo-grid'>
                    <div className='photo-square'>
                        <img className={`photo${(isGrow==="trash") ? '-big' : ''}`} src={trash} alt="trash" onClick={()=>photoGrow('trash')}/>
                    </div>
                    <div className='photo-square'>
                        <img className={`photo${(isGrow==="ep_art") ? '-big' : ''}`} src={ep_art} alt="ep_art" onClick={()=>photoGrow('ep_art')}/>
                    </div>
                    <div className='photo-square'>
                        <img className={`photo${(isGrow==="trees") ? '-big' : ''}`} src={trees} alt="trees" onClick={()=>photoGrow('trees')}/>
                    </div>
                    <div className='photo-square'>
                        <img className={`photo${(isGrow==="hodge") ? '-big' : ''}`} src={hodge} alt="hodge" onClick={()=>photoGrow('hodge')}/>
                    </div>
                    <div className='photo-square'>
                        <img className={`photo${(isGrow==="neg_trees") ? '-big' : ''}`} src={neg_trees} alt="neg_trees" onClick={()=>photoGrow('neg_trees')}/>
                    </div>
                    <div className='photo-square'>
                        <img className={`photo${(isGrow==="pool") ? '-big' : ''}`} src={pool} alt="pool" onClick={()=>photoGrow('pool')}/>
                    </div>
                    <div className='photo-square'>
                        <img className={`photo${(isGrow==="logo_1") ? '-big' : ''}`} src={logo_1} alt="logo_1" onClick={()=>photoGrow('logo_1')}/>
                    </div>
                </div>
                <button className='close-modal-btn' onClick={closeModal}>
                    close.
                </button>
            </div>
        </>
    )
}