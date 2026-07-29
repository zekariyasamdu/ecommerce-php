import "./signup-form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context.jsx";
import Button from "../ui/button/button.jsx";

const SignupForm = () => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await signup(name, email, password);
    } catch (err) {
      const first = Object.values(err.errors || {})[0];
      setError(first?.[0] || err.message || "Unable to create the account.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form id="signup-form" className="auth-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="signup-name" className="field-label">
          Name
        </label>
        <input
          id="signup-name"
          className="form-input"
          placeholder="Your name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="signup-email" className="field-label">
          Email Address
        </label>
        <input
          id="signup-email"
          className="form-input"
          placeholder="name@example.com"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="signup-password" className="field-label">
          Create Password
        </label>
        <input
          id="signup-password"
          className="form-input"
          placeholder="••••••••"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <Button id="signupBtn" type="submit" disabled={submitting}>
        {submitting ? "creating…" : "signup"}
      </Button>
      <div className="form-footer">
        <p className="footer-text">
          Already have an account?{" "}
          <Link to="/signin" className="footer-link">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
