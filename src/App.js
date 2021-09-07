import './App.css';
import pound_2 from './art/pound_2.jpg';
import trans_img from './art/ep_art_bandname.jpg'

function App() {
  return (
    <div className="main">
      <div className="art">
        <img src={pound_2} alt={"pound"} className="pound-logo"/>
        <img src={trans_img} alt={"ep"} className="ep-logo"/>
        <div className="title">lukewarm december 2021</div>
      </div>
    </div>
  );
}

export default App;
