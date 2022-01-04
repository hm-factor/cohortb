import React, { useState } from 'react';
// import sample from '../vids/bar_freda_no_audio_hunter.mov';
import trash from '../art/ep_art.jpg';
import ep_logo from '../art/logo_1.jpg';
import trees from '../art/trees.jpg';

function HomePage () {

  // toggles photo and shop modals -- if one is opened while the other is already opened,
  // itll close the opposite modal
  let [isModal, setIsModal] = useState(false);
  let [isShop, setIsShop] = useState(false);
  let [isGrow, setIsGrow] = useState('');

  function openModal ():void {
    setIsShop(false);
    setIsModal(true);
  }

  function closeModal ():void {
    setIsGrow('');
    setIsModal(false);
  }

  function toggleShop ():void {
    setIsModal(false);
    setIsShop(!isShop);
  }

  function photoGrow (alt: string):void {
    if (!isGrow) {
      setIsGrow(alt);
    } else {
      setIsGrow('');
    }
  }

  return (
    <div className='homepage-container'>
      {/* TOP MODAL */}
      <div className={`dropdown-top ${isModal ? 'modal-on' : ''}`}>
        photos here.
        <div className='photo-grid'>
          <div className='photo-square'>
            <img className={`photo${(isGrow==="trash") ? '-big' : ''}`} src={trash} alt="trash" onClick={()=>photoGrow('trash')}/>
          </div>
          <div className='photo-square'>
            <img className={`photo${(isGrow==="ep_logo") ? '-big' : ''}`} src={ep_logo} alt="ep_logo" onClick={()=>photoGrow('ep_logo')}/>
          </div>
          <div className='photo-square'>
            <img className={`photo${(isGrow==="trees") ? '-big' : ''}`} src={trees} alt="trees" onClick={()=>photoGrow('trees')}/>
          </div>
        </div>
        <button className='close-modal-btn' onClick={()=>closeModal()}>
          close.
        </button>
      </div>

      {/* RIGHT MODAL */}
      <div className={`dropdown-right ${isShop ? 'shop-on' : ''}`}>
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
        <button className='close-modal-btn' onClick={toggleShop}>close shop</button>
      </div>

      {/* PANELS */}
      <div className="panel-container">
        <div className='placeholder-hover'>
          Band Name
        </div>
        <div className="panels">
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Shows
              </div>
              <div className="pane-body">
                no upcoming shows...
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Photos
              </div>
              <div className="pane-body">
                art brought to you from the minds at {'<band name here>'}
                <button onClick={()=>openModal()}>More</button>
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Merch
              </div>
              <div className="pane-body">
                check out the store and buy some goodies
                <button onClick={()=>toggleShop()}>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;