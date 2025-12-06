import { Link } from "react-router-dom";
import projects from "../data/ProjectsData.js";

function Work() {
  return (
    <div className="work">
      <h2 className="work-heading">
        My <span>Projects</span>
      </h2>

      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            <div className="project-body">
              <h3 className="project-heading">{project.title}</h3>

              <p className="project-description">{project.short}</p>

              <p className="skills">
                Tech Stack : {project.tech.join(" , ")}
              </p>
            </div>

            <div className="project-links">
              <a className="btn-github" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn-live" href={project.live} target="_blank" rel="noreferrer">Live</a>

              {/* Dynamic link to detail page */}
              <Link className="project-info" to={`/work/${project.id}`}>
                View More
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>

    
  );
}

export default Work;


