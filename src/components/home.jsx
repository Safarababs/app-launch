import img from "./images/main-img.png";
function Home() {
  return (
    <>
    <div id="share">
      <i className="fas fa-share"></i>
      <a href="#home" className="fab fa-facebook"></a>
      <a href="#home" className="fab fa-twitter"></a>
      <a href="#home" className="fab fa-instagram"></a>
      <a href="#home" className="fab fa-linkedin"></a>
      <a href="#home" className="fab fa-pinterest"></a>
    </div>


    <section className="home" id="home">
    <div className="content">
      <h1>creative way to showcase your app</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consectetur suscipit aut ut eos odio nobis minima officiis mollitia tempore.</p>

      <div className="buttons">
        <a href="#home"><button className="btn">download</button></a>
        <a href="#home"><button className="btn">learn more</button></a>
      </div>
    </div>

    <div className="image">
      <img src={img} alt=""/>
    </div>
    </section>
    </>
  );
}

export default Home;
