import "./signin-view.css";
import SigninForm from "../../components/signin-form/signin-form.jsx";
import AuthHero from "../../components/auth-hero/auth-hero.jsx";

const SigninScreen = () => {
  return (
    <div className="split-auth-wrapper">
      <div className="auth-split-visual">
        <AuthHero />
      </div>

      <div className="auth-split-content">
        <div className="auth-form-container">
          <div className="signin-header">
            <h1 className="signin-title">Access Zeus</h1>
            <p className="signin-subtitle">
              Enter your email and credentials to manage your orders
            </p>
          </div>
          <SigninForm />
        </div>
      </div>
    </div>
  );
};

export default SigninScreen;
