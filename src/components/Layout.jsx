import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <>
      {/* NAVBAR */} 
      <header className="navbar">
        <div className="logo">
          {/* <img src="images/Logo.png" alt="Jeetz" /> */}
          <a href="/" className="logo-text"><h2>JEETZ</h2></a>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
          <NavLink to="/skills" className="link">Skills</NavLink>
          <NavLink to ="/resume" className="link">Resume</NavLink>
          <NavLink to="/work" className="link">Work</NavLink>
          <NavLink to="/services" className="link">Services</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
