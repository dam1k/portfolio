import {projects} from "../data/data";

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-title">
        <h2>My recent projects:</h2>
      </div>
      <div className="blue-border"></div>
      
      <div className="grid-container">

         {projects.map(project => {
          return (
            <a href={project.url} target="_blank">
        <div className="grid-item">
          <div className="grid-item-img">
          <img src={project.image}/>
          </div>
          <div className="grid-item-info">
            <h3 className="grid-item-title">
              {project.title}
            </h3>
            <p className="grid-item-desc">
            {project.description} 
            </p>
          </div>
        </div>
        </a>
          )
         })}

      </div>
    </section>
  )
}

export default Projects
