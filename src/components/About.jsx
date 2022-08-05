import AboutImage from "../assets/img/about-photo.jpg"

const About = () => {
  return (
    <section id="about">
    <div className="section-title">
      <h1>About Me</h1>
    </div>
    <div className="blue-border" />
    <p className="section-desc">Let me tell you a bit about me and my work...</p>
    <div className="container flex">
      <img className="about-img" src={AboutImage}/>
      <div className="about-info">
        <h3>My name is Damian and i am a front end developer. I have been programming for about 2 years.
          In that time, i have accumulated a lot of experience with HTML, CSS and JavaScript.
          I am always looking into expanding my knowledge and learning more.</h3>
      </div>
    </div>
  </section>  
  )
}

export default About