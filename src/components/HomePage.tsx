import React, { useState } from 'react';
// import sample from '../vids/bar_freda_no_audio_hunter.mov';
import trash from '../art/trash.png';
import ep_art from '../art/ep_art.jpg';
import trees from '../art/trees.jpg';
import hodge from '../art/hodge.jpg';
import neg_trees from '../art/neg_trees.jpg';
import logo_1 from '../art/logo_1.jpg';
import pool from '../art/pool.jpg';

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
        <button className='close-modal-btn' onClick={()=>closeModal()}>
          close.
        </button>
      </div>

      {/* RIGHT MODAL */}
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
        <button className='close-modal-btn' onClick={toggleShop}>close shop</button>
      </div>

      {/* PANELS */}
      <div className="panel-container">
        <div className='band-name-container'>
          <p>COHORT <sup>(b)</sup></p>
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
                cohort hive mind art
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