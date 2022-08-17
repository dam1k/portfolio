import Project1 from "../assets/img/project1.jpeg"
import Project2 from "../assets/img/project2.jpeg"
import Project3 from "../assets/img/project3.jpeg"

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-title">
        <h2>My recent projects:</h2>
      </div>
      <div className="blue-border"></div>
      
      <div className="grid-container">

       <a href="https://house-marketplace-two-gules.vercel.app/" target="_blank">
        <div className="grid-item">
          <div className="grid-item-img">
            <img src={Project1}/>
          </div>
          <div className="grid-item-info">
            <h3 className="grid-item-title">
              House Marketplace
            </h3>
            <p className="grid-item-desc">
            On this website you can explore house listings by category, as well as log in and add your own listings.
            </p>
          </div>
        </div>
        </a>

         <a href="https://expensetrack.vercel.app" target="_blank">
        <div className="grid-item">
          <div className="grid-item-img">
          <img src={Project2}/>
          </div>
          <div className="grid-item-info">
            <h3 className="grid-item-title">
              Expense Tracker
            </h3>
            <p className="grid-item-desc">
            Expense tracker app made with ReactJs. Monitor your expenses by adding transactions. 
            </p>
          </div>
        </div>
        </a>

<a href="https://vacation-website.vercel.app" target="_blank">
        <div className="grid-item">
          <div className="grid-item-img">
          <img src={Project3}/>
          </div>
          <div className="grid-item-info">
            <h3 className="grid-item-title">
              Vacation Website
            </h3>
            <p className="grid-item-desc">
            Responsive landing page website made with ReactJs. 
            </p>
          </div>
        </div>
        </a>
      </div>
    </section>
  )
}

export default Projects
