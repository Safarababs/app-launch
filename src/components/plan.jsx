
function Plan() {
  return (
    <section className="plan" id="plan">
      <h1 className="heading"><span>choose a plan</span></h1>
      <div className="box-container">
        <div className="box">
          <h3 className="title">basic</h3>
          <h3 className="price">$10<span>/mo</span></h3>
          <ul className="list">
            <li><i className="fa-solid fa-check"></i>full access</li>
            <li><i className="fa-solid fa-check"></i>full support</li>
            <li><i className="fa-solid fa-xmark"></i>new themes</li>
            <li><i className="fa-solid fa-xmark"></i>admin panel</li>
            <li><i className="fa-solid fa-xmark"></i>unlimited packege</li>
          </ul>
          <a href="#home"><button className="btn">check out</button></a>
        </div>

        <div className="box">
          <h3 className="title">standard</h3>
          <h3 className="price">$10<span>/mo</span></h3>
          <ul className="list">
            <li><i className="fa-solid fa-check"></i>full access</li>
            <li><i className="fa-solid fa-check"></i>full support</li>
            <li><i className="fa-solid fa-check"></i>new themes</li>
            <li><i className="fa-solid fa-xmark"></i>admin panel</li>
            <li><i className="fa-solid fa-xmark"></i>unlimited packege</li>
          </ul>
          <a href="#home"><button className="btn">check out</button></a>
        </div>

        <div className="box">
          <h3 className="title">premium</h3>
          <h3 className="price">$10<span>/mo</span></h3>
          <ul className="list">
            <li><i className="fa-solid fa-check"></i>full access</li>
            <li><i className="fa-solid fa-check"></i>full support</li>
            <li><i className="fa-solid fa-check"></i>new themes</li>
            <li><i className="fa-solid fa-check"></i>admin panel</li>
            <li><i className="fa-solid fa-check"></i>unlimited packege</li>
          </ul>
          <a href="#home"><button className="btn">check out</button></a>
        </div>
      </div>
    </section>
  );
}

export default Plan;
