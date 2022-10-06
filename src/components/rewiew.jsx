import img1 from "./images/pic1.webp";
import img2 from "./images/pic2.jpg";
import img3 from "./images/pic3.jpg";
import img4 from "./images/pic4.jpg";

function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading"><span>customers review</span></h1>

      <div className="review-slider owl-carousel">

        <div className="box">
          <img src={img1} alt=""/>
          <h3>john doe</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptates mollitia! Omnis porro deleniti modi sed ducimus voluptate, tenetur nihil voluptatem repellendus pariatur dignissimos atque dolorum eligendi odit ex quisquam?</p>

          <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>

        <div className="box">
          <img src={img2} alt=""/>
          <h3>john doe</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptates mollitia! Omnis porro deleniti modi sed ducimus voluptate, tenetur nihil voluptatem repellendus pariatur dignissimos atque dolorum eligendi odit ex quisquam?</p>

          <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          </div>
          
        </div>

        <div className="box">
          <img src={img3} alt=""/>
          <h3>john doe</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptates mollitia! Omnis porro deleniti modi sed ducimus voluptate, tenetur nihil voluptatem repellendus pariatur dignissimos atque dolorum eligendi odit ex quisquam?</p>

          <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          </div>
          
        </div>

        <div className="box">
          <img src={img4} alt=""/>
          <h3>john doe</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptates mollitia! Omnis porro deleniti modi sed ducimus voluptate, tenetur nihil voluptatem repellendus pariatur dignissimos atque dolorum eligendi odit ex quisquam?</p>

          <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Review;
