import "./signup-view.css";
import SignupForm from "../../components/signup-form/signup-form.jsx";
import AuthHero from "../../components/auth-hero/auth-hero.jsx";

const SignupScreen = () => {
  return (
    <div className="split-auth-wrapper">
      <div className="auth-split-visual">
        <AuthHero />
      </div>

      <div className="auth-split-content">
        <div className="auth-form-container">
          <div className="signup-header">
            <h1 className="signup-title">Join Zeus</h1>
            <p className="signup-subtitle">
              Create an account to explore premium collections and track details
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
