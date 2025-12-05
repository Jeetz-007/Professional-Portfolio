
const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["MongoDB", "Mongoose","SQL"]
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    skills: ["Git & GitHub", "Vercel", "Netlify", "Postman"]
  },
  // {
  //   id: "other",
  //   title: "Other",
  //   skills: ["Testing (basic)", "Authentication (JWT)", "Web Accessibility", "Performance"]
  // }
];

export default function Skills() {
  return (
    <section className="skills-page" aria-labelledby="skills-title">
      <div className="skills-inner">
        <header className="skills-header">
          <h1 id="skills-title" className="skills-title">
            Skills & Tools
          </h1>
          <p className="skills-sub">
            A compact overview — the tools I use most. Click any project to see these in action.
          </p>
        </header>

        <div className="skills-grid" role="list">
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-card" key={cat.id} role="listitem" aria-labelledby={`cat-${cat.id}`}>
              <h3 id={`cat-${cat.id}`} className="skill-card-title">
                {cat.title}
              </h3>

              <div className="skill-chips" aria-hidden="false">
                {cat.skills.map((s) => (
                  <button
                    key={s}
                    className="skill-chip"
                    type="button"
                    title={s}
                    aria-label={`${s} skill`}
                    onClick={() => {}}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
