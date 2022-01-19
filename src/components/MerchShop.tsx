import React, { useState } from 'react';

type MerchShopProps = {
    isShop: Boolean,
    setIsShop: Function
}

export default function MerchShop ({isShop, setIsShop}:MerchShopProps) {

    function closeShop ():void {
        setIsShop(false);
    }

    return (
        <>
        <div className={`dropdown-right ${isShop ? 'shop-on' : ''}`}>
                SHOP
                <div className='shop'>
                    <div className='shop-item'>
                        this is a shirt
                        <button>add to cart.</button>
                    </div>
                    <div className='shop-item'>
                        this is also a shirt
                        <button>add to cart.</button>
                    </div>
                    <div className='shop-item'>
                        not a shirt this time
                        <button>add to cart.</button>
                    </div>
                    <div className='shop-item'>
                        some pants
                        <button>add to cart.</button>
                    </div>
                    <div className='shop-item'>
                        sweater or jacket 
                        <button>add to cart.</button>
                    </div>
                    <div className='shop-item'>
                        this is a shirt
                        <button>add to cart.</button>
                    </div>
                </div>
                <button className='close-modal-btn' onClick={closeShop}>close.</button>
            </div>
        </>
    )
}