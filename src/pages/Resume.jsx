import { Link } from "react-router-dom";
import projects from "../data/ProjectsData";
import { FaDownload, FaArrowLeft } from "react-icons/fa";


export default function Resume() {
  return (
    <section className="resume-page">
      <h1 className="resume-heading">Resume</h1>

      {/* Summary */}
      <div className="resume-section summary">
        <h2>Professional Summary</h2>
        <p>
          Self-taught Full Stack Developer skilled in building responsive,
          clean, and efficient web applications. I work with React, Node, and
          modern JavaScript to create real-world projects. Passionate about
          problem-solving, UI polish, and delivering user-focused solutions.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="resume-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill-group">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Database</h3>
            <ul>
              <li>MongoDB</li>
              <li>MongoDB Atlas</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Tools & Deployment</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Vercel</li>
              <li>Netlify</li>
              <li>Render</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Summary */}
      <div className="resume-section">
        <h2>Project Highlights</h2>

        <div className="resume-projects">
          {projects.map((p) => (
            <div key={p.id} className="resume-project-card">
              <h3>{p.title}</h3>
              <p>{p.short || p.description.slice(0, 90) + "..."}</p>
              <Link to={`/work/${p.id}`} className="resume-project-link">
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Resume PDF Viewer */}
      <div className="resume-section pdf-viewer">
        <h2>Resume PDF</h2>

        <div className="pdf-frame">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            className="pdf-embed"
          ></iframe>
        </div>

        <a href="/resume.pdf" download className="btn-primary neon-btn">
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Footer buttons */}
      <div className="resume-actions">
        <Link to="/" className="btn-secondary back-btn">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </section>
  );
}
