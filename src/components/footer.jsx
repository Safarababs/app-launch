
function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <h3>why shoose us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, facere iusto excepturi at modi illo tenetur atque fugiat numquam rerum.</p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#feature">feature</a>
          <a href="#screenshot">screenshot</a>
          <a href="#review">review</a>
          <a href="#plan">plan</a>
          <a href="#download">download</a>
        </div>

        <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input type="email" placeholder="enter your email"></input>
            <button className="fas fa-paper-plane"></button>
          </form>
        </div>
      </div>

      <h1 className="credit">© copyright @ {new Date().getFullYear()} by <a href="#home">mr safar abbas</a> | all rights reserved. </h1>
    </section>
  );
}

export default Footer;
