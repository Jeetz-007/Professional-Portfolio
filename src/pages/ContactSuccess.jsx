import { Link, useNavigate } from "react-router-dom";

export default function ContactSuccess() {
  const navigate = useNavigate();

  return (
    <div className="contact-success">
      <div className="success-card">
        <h1 className="success-title">Message sent 🎉</h1>
        <p className="success-text">
          Thanks for reaching out — I received your message and will reply soon.
        </p>

        <div className="success-actions">
          <button className="btn-back" onClick={() => navigate(-1)}>Back</button>
          <Link to="/" className="btn-primary-link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
