import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkillsPreview from "../components/SkillsPreview"; 
import { FaChevronDown, FaDownload } from "react-icons/fa";

export default function Home() {

  // rotating micro title
  const titles = ["Full Stack Developer", "React Specialist", "UI-Focused Dev", "Freelancer"];
  const [titleIndex, setTitleIndex] = useState(0);


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={`home-hero ${mounted ? "is-visible" : ""}`} role="region" aria-label="Home hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title" aria-label={`Hello, I'm Jeethendra`}>
            Hello, I'm <span>Jeethendra</span>
            {/* <span className="title-underline" aria-hidden="true" /> */}
          </h1>

          <p className="hero-rotating" aria-live="polite">
            {titles[titleIndex]}
          </p>

          <p className="hero-intro">
            {/* I build clean, efficient web apps that solve real problems. Currently focusing on React & full-stack projects.
            <p>Currently focusing on React & full-stack projects.</p>
              */}
            I create fast, reliable web applications with a strong focus on real-world use.
            Currently exploring React and full-stack workflows to build smarter and ship faster.
            I enjoy breaking complex problems into clean solutions… and pretending I didn’t just Google that function for the 3rd time.

            {/* —powered by caffeine and curiosity. */}

          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-entrance" aria-label="Let's Connect">
              Let's Connect
            </Link>

            <a
              href="/resume.pdf"
              className="btn btn-outline btn-entrance"
              aria-label="Download CV"
              download
            >
              <FaDownload style={{ marginRight: 8 }} /> Download CV
            </a>
          </div>

          {/* small skills preview (compact) */}
          <div className="home-skills-preview">
            <SkillsPreview skills={["MongoDB","Express js" , "React" , "Node js"]} />
          </div>
        </div>

      </div>
    </section>
  );
}

