import React, { useState } from 'react';
// import sample from '../vids/bar_freda_no_audio_hunter.mov';
import trash from '../art/ep_art.jpg';
import ep_logo from '../art/logo_1.jpg';
import trees from '../art/trees.jpg';

function HomePage () {

  let [isModal, setIsModal] = useState(false);
  let [isGrow, setIsGrow] = useState('');

  function openModal () {
    setIsModal(true)
  }

  function closeModal () {
    setIsModal(false)
  }

  function photoGrow (event: any) {
    if (!isGrow) {
      console.log(event.target)
    } else {
      setIsGrow('')
    }
  }

  return (
    <div className="homepage-container">
      <div className={`dropdown ${isModal ? 'modal-on' : ''}`}>
        photos here.
        <div className='photo-grid'>
          <div className='photo-square'>
            <img className={`photo ${isGrow ? 'big' : ''}`} src={trash} alt="trash" onClick={(event)=>photoGrow(event)}/>
          </div>
          <div className='photo-square'>
            <img className={`photo ${isGrow ? 'big' : ''}`} src={ep_logo} alt="ep_logo" onClick={(event)=>photoGrow(event)}/>
          </div>
          <div className='photo-square'>
            <img className={`photo ${isGrow ? 'big' : ''}`} src={trees} alt="trees" onClick={(event)=>photoGrow(event)}/>
          </div>
        </div>
        <button className='close-modal-btn' onClick={()=>closeModal()}>
          close.
        </button>
      </div>
      <div className="panel-container">
        <div className='placeholder-hover'>
          NAME
        </div>
        <div className="panels">
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Shows
              </div>
              <div className="pane-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque velit aliquam facere excepturi vero assumenda.
              </div>
            </div>
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Photos
              </div>
              <div className="pane-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque velit aliquam facere excepturi vero assumenda.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque velit aliquam facere excepturi vero assumenda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;