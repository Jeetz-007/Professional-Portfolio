import { FaDiscord, FaGithub, FaLinkedin, FaChevronUp } from "react-icons/fa";


export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="ft">
        <div className="ft-inner">
          <div className="ft-brand">
            {/* <img src="/JEETZ_LOGO.png" alt="Jeethendra logo" className="ft-logo" /> */}
            <div className="ft-logo">
              <a href="/" className="logo-text"><h2>JEETZ</h2></a>
            </div>
            <p className="ft-tag">Clean interfaces • Reliable apps • Open to collaborate</p>
          </div>

          <nav className="ft-nav" aria-label="Footer navigation">
            <a href="/" className="ft-link">Home</a>
            <a href="/about" className="ft-link">About</a>
            <a href="/work" className="ft-link">Work</a>
            <a href="/contact" className="ft-link">Contact</a>
          </nav>

          <div className="ft-social">
            <a href="" aria-label="Discord" className="ft-social-btn"><FaDiscord /></a>
            <a href="https://github.com/Jeetz-007" target="_blank" aria-label="GitHub" className="ft-social-btn"><FaGithub /></a>
            <a href="https://linkedin.com/in/jeethendra-vara-prasad-7584b0209/" target="_blank" aria-label="LinkedIn" className="ft-social-btn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="ft-bottom">
          <span className="ft-copy">© {new Date().getFullYear()} Jeethendra Varaprasad</span>
        </div>
      </footer>

      <button
        className="ft-up"
        onClick={scrollTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <FaChevronUp />
      </button>
    </>
  );
}
