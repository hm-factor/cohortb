import React from 'react';
// import sample from '../vids/bar_freda_no_audio_hunter.mov';
// import phallic from '../art/phallic.JPG';

function HomePage () {

  return (
    <div className="homepage-container">
      <div className="panel-container">
        {/* <div className="panel-logo">
          <img src={phallic} alt="" />
        </div> */}
        <div className='placeholder-hover'>
          NAME
        </div>
        <div className="panels">
          <div className="pane">
            {/* <div className="artwork">
              <img src={phallic} alt="phallic"/>
            </div> */}
            <div className="pane-content">
              <div className="pane-title">
                Shows
              </div>
              <div className="pane-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Doloremque velit aliquam facere excepturi vero assumenda.
              </div>
            </div>
            {/* <div className="video">
              <video className='videoTag' autoPlay loop muted>
                  <source src={sample} type='video/mov' />
              </video>
            </div> */}
          </div>
          <div className="pane">
            <div className="pane-content">
              <div className="pane-title">
                Photos
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