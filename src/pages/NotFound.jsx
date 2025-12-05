import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="notfound-page">
      <div className="notfound-inner">
        
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Page Not Found</h2>
        
        <p className="nf-text">
          Looks like you’ve wandered into the unknown.  
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="nf-actions">
          <button className="btn-back" onClick={() => window.history.back()}>
            <FaArrowLeft /> Go Back
          </button>

          <Link to="/" className="btn-home">
            <FaHome /> Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}
