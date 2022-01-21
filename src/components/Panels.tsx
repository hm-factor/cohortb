type PanelsProps = {
    setIsShop: Function,
    setIsModal: Function
}

export default function Panels ({setIsShop, setIsModal}: PanelsProps) {
    function openModal ():void {
        setIsShop(false);
        setIsModal(true);
    }

    function toggleShop ():void {
        setIsModal(false);
        setIsShop(true);
    }

    return ( 
      <div className="panel-container">
        <div className='band-name-container'>
          <p>COHORT <sup>(b)</sup></p>
        </div>
        <div className="panels">
          <div className="panel">
            <div className="panel-content">
              <div className="panel-title">
                Shows
              </div>
              <div className="panel-body">
                no upcoming shows...
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-content">
              <div className="panel-title">
                Photos
              </div>
              <div className="panel-body">
                cohort hive mind art
                <button onClick={openModal}>More</button>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-content">
              <div className="panel-title">
                Merch
              </div>
              <div className="panel-body">
                check out the store and buy some goodies
                <button onClick={toggleShop}>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}