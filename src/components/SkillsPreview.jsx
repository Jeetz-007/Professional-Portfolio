export default function SkillsPreview({ skills = [] }) {
  return (
    <div className="skills-preview">
      {skills.map((skill) => (
        <span className="skill-chip" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  );
}
