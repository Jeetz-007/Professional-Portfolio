import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const navigate = useNavigate();

  const FORM_SPREE_ENDPOINT = "https://formspree.io/f/xkgdbpkk";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.phoneNumber.toString().trim()) e.phoneNumber = "Please enter phone number.";
    if (!form.message.trim()) e.message = "Please enter a short message.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phoneNumber,
        message: form.message
      };

      const res = await fetch(FORM_SPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        // navigate to success page
        navigate("/contact/success", { replace: true });
      } else {
        const message = (data && data.error) || "Failed to send. Please try again later.";
        setSubmitError(message);
      }
    } catch (err) {
      setSubmitError("Network error — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>

      <div className="contact-flex">

        {/* LEFT — FORM */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name && <div id="err-name" className="field-error">{errors.name}</div>}

          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            required
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && <div id="err-email" className="field-error">{errors.email}</div>}

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="tel"
            required
            placeholder="Your phone number"
            value={form.phoneNumber}
            onChange={handleChange}
            aria-invalid={!!errors.phoneNumber}
            aria-describedby={errors.phoneNumber ? "err-phone" : undefined}
          />
          {errors.phoneNumber && <div id="err-phone" className="field-error">{errors.phoneNumber}</div>}

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message here..."
            value={form.message}
            onChange={handleChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-msg" : undefined}
            rows={6}
            required
          />
          {errors.message && <div id="err-msg" className="field-error">{errors.message}</div>}

          {submitError && <div className="submit-error" role="alert">{submitError}</div>}

          <button type="submit" className="btn-submit" disabled={submitting}>
            {submitting ? (<><FaPaperPlane style={{ marginRight: 8 }} /> Sending...</>) : (<><FaPaperPlane style={{ marginRight: 8 }} /> Send Message</>)}
          </button>
        </form>

        {/* RIGHT — SOCIAL LINKS */}
        <div className="social-links">
          <h2 className="link-heading">Chat with me</h2>

          <p className="contact-description">
            I'm always open to new opportunities, collaborations, and tech conversations.
            Feel free to reach out — I’ll get back to you as soon as I can!
          </p>

          <div className="contact-links">
            <a href="" className="contact-link">
              <FaDiscord className="link-icon" />
              Shoot me an Email
            </a>

            <a href="https://www.linkedin.com/in/jeethendra-vara-prasad-7584b0209" target="_blank" rel="noreferrer" className="contact-link">
              <FaLinkedin className="link-icon" />
              Ping me on LinkedIn
            </a>

            <a href="https://github.com/Jeetz-007" target="_blank" rel="noreferrer" className="contact-link">
              <FaGithub className="link-icon" />
              Check my GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
