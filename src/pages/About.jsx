import { FaGithub, FaLinkedin,FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import TimelineCards from "../components/TimelineCards.jsx";
import "/src/style/TimelineCards.css"





export default function About() {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <div className="about-inner">

        <div className="about-card">
          <h2 id="about-title" className="about-title">
            Who <span>I am</span>
          </h2>

          <p className="about-lead">
            I'm <strong>Jeethendra Varaprasad</strong> — a self-taught full-stack developer who builds clean, usable web apps.
            I focus on React-driven frontends and pragmatic backend integrations.
          </p>

          <div className="about-education">
            <h3>My Education</h3>

            <ul className="timeline">
              <li><strong>2015 - 2016</strong> — Narayana Concept School</li>
              <li><strong>2016 - 2018</strong> — Intermediate at Narayana Junior College, Hyderabad.</li>
              <li><strong>2018 - 2023</strong> — Dual Degree in Mining Engineering from IIT Kharagpur.</li>
            </ul>
          </div>

          <div className="about-skills">
            <h3>What I work with</h3>
            <div className="chips">
              <span className="chip">Python</span>
              <span className="chip">JavaScript (ES6+)</span>
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">Express</span>
              <span className="chip">MongoDB</span>
            </div>
          </div>

          <div className="about-process">
            <h3>How I work</h3>
            <ol className="process">
              <li><strong>Understand</strong> the problem & users</li>
              <li><strong>Design</strong> simple, reusable components</li>
              <li><strong>Ship</strong> incrementally and learn fast</li>
            </ol>
          </div>

          {/* <p className="about-personal">
            When I'm not debugging, I'm usually tweaking my setup or watching a tech talk — I never really stop learning.
          </p> */}

          <p className="about-personal">
            When I’m not debugging, I’m probably… actually, no — I’m still debugging. But I enjoy it.
          </p>

          <div className="about-ctas">
            <Link to="/contact" className="btn btn-primary">Let's collaborate</Link>
            <a className="btn btn-outline" href="/resume.pdf" download>Download CV</a>
          </div>
        </div>


        <aside className="about-photo" aria-hidden="false">
          <div className="photo-frame">
            <img src="images/aboutPic.jpg" alt="Jeethendra Varaprasad" className="profile-pic" />
          </div>

          <div className="social-row" aria-label="Social links">
            <a href="mailto:jeethendravaraprasad007@gmail.com" className="social" aria-label="Gmail"><FaMailBulk /></a>
            <a href="https://github.com/Jeetz-007" target="_blank" className="social" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/jeethendra-vara-prasad-7584b0209/"  target="_blank" className="social" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </aside>
      </div>

      <div className="my-journey">
        <h2 className="journey-title">My <span>Programming Journey</span></h2>
        <div className="journey-content">
          <TimelineCards />
        </div>
      </div>

    <div class="testimonials">

        <div class="testimonial-headings">
            <h2 class="testimonial-main-heading">What people <span>say</span></h2>
            <h3 class="testimonial-subheading">About my work</h3>
        </div>

        <div class="testimonial-content">

            <div class="testimonial">
                <p class="project-heading">Hyper Fitness Studio</p>
                <p class="client-review">Very happy with the website developed by Jeethendra. 
                    He clearly understood our requirements and delivered everything on time. 
                    Communication was smooth, and he was always available for changes and clarifications. 
                    Overall, very satisfied with his work and would definitely recommend him.
                </p>
                <p class="client-name">
                    <i>- Shaik Hyder</i>
                </p>
            </div>

            {/* <div class="testimonial">
                <p class="project-heading">Thrive Fitness</p>
                <p class="client-review">Very happy with the website developed by Jeethendra. 
                    He clearly understood our requirements and delivered everything on time. 
                    Communication was smooth, and he was always available for changes and clarifications. 
                    Overall, very satisfied with his work and would definitely recommend him.
                </p>
                <p class="client-name">
                    <i>- Thrive Anna</i>
                </p>
            </div> */}

        </div>

    </div>

    </section>
  );
}
