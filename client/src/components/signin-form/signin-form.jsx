import "./signin-form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context.jsx";
import Button from "../ui/button/button.jsx";

const SigninForm = () => {
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await signin(email, password);
    } catch (err) {
      setError(err.errors?.email?.[0] || err.message || "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form id="signin-form" className="auth-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="email" className="field-label">
          Email Address
        </label>
        <input
          id="email"
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
        <label htmlFor="password" className="field-label">
          Password
        </label>
        <input
          id="password"
          className="form-input"
          placeholder="••••••••"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <Button id="signinBtn" type="submit" disabled={submitting}>
        {submitting ? "signing in…" : "signin"}
      </Button>
      <div className="form-footer">
        <p className="footer-text">
          Don't have an account?{" "}
          <Link to="/signup" className="footer-link">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SigninForm;
