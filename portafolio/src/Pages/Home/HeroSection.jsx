export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome to Guillermo´s Portfolio</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">IOS and Web</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
          <button className="btn btn-touch">Get In Touch</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/home_front.png" alt="Hero Section" />
      </div>
    </section>
  );
}
