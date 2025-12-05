import { FaCode, FaServer, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Clean, responsive and user-friendly interfaces built with React, modern JavaScript, and clean UI design principles."
    },
    {
      icon: <FaServer />,
      title: "Backend APIs & Logic",
      desc: "Node.js + Express APIs, database logic, authentication, and clean backend architecture."
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Applications",
      desc: "End-to-end applications from UI to database — efficient, optimized, and scalable."
    },
    {
      icon: <FaRocket />,
      title: "Deployment & Optimization",
      desc: "Deploying apps to Vercel, Netlify, Render, and optimizing performance for real users."
    }
  ];

  return (
    <section className="services-container">
      <h1 className="services-heading">What I Do</h1>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
