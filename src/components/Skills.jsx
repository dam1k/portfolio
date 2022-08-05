import SkillsImage from "../assets/img/skills.jpeg"

const Skills = () => {
  return (
    <section id="skills">
  <div className="section-title">
    <h1>My Skills</h1>
  </div>  
  <div className="blue-border" />
  <div className="container grid">
    <div className="skills-info">
      <h3> I can make modern and elegant websites that will help you promote your business and reach more customers. 
        I really enjoy to connect with my customers so i can give them the best product possible. 
        My main goal is to satisfy the client's needs and wishes.</h3>
      <div className="mySkills">
        <i className="fab fa-html5" />
        <i className="fab fa-css3-alt" />
        <i className="fab fa-js" />
      </div>
    </div>
    <div className="skills-img">
      <img src={SkillsImage} />
    </div>
  </div>
</section>
  )
}

export default Skills