import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";


function ScreenShot() {
  return (
    <section className="screenshot" id="screenshot">
      <h1 className="heading"><span>app screenshot</span></h1>
      <div className="screen-slider owl-carousel">
        
        <div className="item">
          <img src={img1} alt="" />
        </div>

        <div className="item">
          <img src={img2} alt="" />
        </div>

        <div className="item">
          <img src={img3} alt="" />
        </div>

        <div className="item">
          <img src={img4} alt="" />
        </div>

        <div className="item">
          <img src={img5} alt="" />
        </div>

      </div>
    </section>
  );
}

export default ScreenShot;
