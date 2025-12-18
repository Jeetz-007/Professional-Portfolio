import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/ProjectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useState, useMemo } from "react";


export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  // If project not found
  if (!project) {
    return (
      <div className="project-detail not-found">
        <h2>Project not found</h2>
        <p>We couldn't find the project you were looking for.</p>
        <div className="detail-actions">
          <button onClick={() => navigate(-1)} className="btn-back">Go Back</button>
          <Link to="/work" className="btn-primary-link">See all projects</Link>
        </div>
      </div>
    );
  }

  const screenshots = useMemo(() => {
    const arr = Array.isArray(project.screenshots) ? project.screenshots : [];

    // remove falsy / empty entries
    return arr.filter((s) => typeof s === "string" && s.trim().length > 0);
  }, [project.screenshots]);

  // Main image: prefer thumbnail, else first screenshot, else placeholder
  const initialMain = project.thumbnail && project.thumbnail.trim().length > 0
    ? project.thumbnail
    : (screenshots.length ? screenshots[0] : null);

  const [mainImage, setMainImage] = useState(initialMain);

  return (
    <section className="project-detail">
      <div className="detail-head">
        <button className="back-inline" onClick={() => navigate(-1)} aria-label="Back to projects">
          <FaArrowLeft /> Back
        </button>

        <div className="detail-title">
          <h1>{project.title}</h1>

        </div>

        <div className="detail-links">
          {project.github && (
            <a href={project.github} className="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} className="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Live demo">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>

      <div className="detail-grid">

        <div className="visual-column">

          {mainImage ? (
            <div className="project-hero">
              <img src={mainImage} alt={`${project.title} preview`} className="main-image" loading="eager" />
            </div>
          ) : (
            <div className="project-hero placeholder">
              <div className="placeholder-box">No preview available</div>
            </div>
          )}

          {/* Thumbnail strip if we have screenshots (excluding thumbnail if duplicate) */}
          <h3>Screenshots</h3>
          {screenshots.length > 0 && (
            <div className="thumbs">
              {/* If thumbnail exists and is not included in screenshots, show it first */}
              {project.thumbnail && project.thumbnail.trim().length > 0 && !screenshots.includes(project.thumbnail) && (
                <button
                  className={`thumb ${mainImage === project.thumbnail ? "active" : ""}`}
                  onClick={() => setMainImage(project.thumbnail)}
                >
                  <img src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" />
                </button>
              )}
              

              {screenshots.map((src, i) => (
                <button
                  key={i}
                  className={`thumb ${mainImage === src ? "active" : ""}`}
                  onClick={() => setMainImage(src)}
                  aria-label={`Show screenshot ${i + 1}`}
                >
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-content">
          <h3>Project Overview</h3>
          <p className="description">{project.description}</p>

          <h3>Tech & Tools</h3>
          <div className="tech-list">
            {project.tech.map((t) => (
              <div className="tech-item" key={t}>
                <span className="tech-name">{t}</span>
                {project.techDetails && project.techDetails[t] && (
                  <small className="tech-detail">{project.techDetails[t]}</small>
                )}
              </div>
            ))}
          </div>
{/* 
          <h3>Results & Notes</h3>
          <p className="notes">
            Prototype built to validate concepts; can be extended with backend integration and user testing.
          </p> */}

          <div className="detail-actions">
            <Link to="/work" className="btn-secondary">Back to projects</Link>
            {project.live && (
              <a className="btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">View Live</a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
