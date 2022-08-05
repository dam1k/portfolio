
const Header = () => {
  return (
    <section id="content">
    <div className="container">
      <div className="content-flex">
        <div className="main-content">
          <p className="hey">Hi there!</p>
          <h1>My name is Damian and I specialize in <span className="pink-highlight">UI</span> &amp; <span className="pink-highlight">UX</span> Design and Front End Development.</h1>
        </div>
        <div className="btns">
          <a href="#about" className="pink-btn btn">About me</a>
          <a href="#contact" className="blue-btn btn">Contact me</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header