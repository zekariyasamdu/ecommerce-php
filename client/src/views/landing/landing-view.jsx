import "./landing-view.css";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  // In-page anchors are handled manually so the hash router keeps owning the URL.
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-wrapper">
      <header className="main-header">
        <div className="brand-identity">
          <span className="brand-name">Zeus</span>
        </div>

        <nav className="nav-menu">
          <a href="#hero" className="nav-link" onClick={(e) => scrollTo(e, "hero")}>
            Home
          </a>
          <a
            href="#metrics"
            className="nav-link"
            onClick={(e) => scrollTo(e, "metrics")}
          >
            Features
          </a>
          <a
            href="#features"
            className="nav-link"
            onClick={(e) => scrollTo(e, "features")}
          >
            App Experience
          </a>
        </nav>

        <div className="header-actions">
          <Link to="/signin" className="cta-button-login">
            Login
          </Link>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            Control your fulfillment
            <br />
            like never before.
          </h1>
          <p className="hero-subtext">
            Real-time order tracking, advanced marketplace analytics, and seamless
            inventory management—all in one powerful marketplace platform.
          </p>
        </div>
      </section>

      <section id="metrics" className="metrics-section">
        <div className="section-intro">
          <h2 className="section-title">The Ultimate Shopping Experience.</h2>
          <p className="section-subtitle">
            Discover millions of products with ultra-fast delivery, unbeatable buyer
            protection, and personalized recommendations curated just for you.
          </p>
        </div>

        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-label">Prime Delivery</span>
            <h3 className="metric-value">Same Day</h3>
            <p className="metric-caption">fast, free shipping</p>
            <p className="metric-description">
              Get your essentials delivered right to your doorstep within hours on
              millions of eligible household, tech, and lifestyle items.
            </p>
          </div>

          <div className="metric-card">
            <span className="metric-label">Secure Checkout</span>
            <h3 className="metric-value">1-Click</h3>
            <p className="metric-caption">seamless payment processing</p>
            <p className="metric-description">
              Save your details securely to buy in an instant with comprehensive fraud
              protection and hassle-free 30-day return guarantees.
            </p>
          </div>

          <div className="metric-card">
            <span className="metric-label">Massive Selection</span>
            <h3 className="metric-value">10M+</h3>
            <p className="metric-caption">products across all categories</p>
            <p className="metric-description">
              Explore a limitless catalog from top global brands and trusted local
              sellers, covering electronics, fashion, home goods, and daily essentials.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="compatibility-section">
        <div className="compatibility-container">
          <div className="features-panel">
            <h2 className="features-headline">
              Shop Smarter.
              <br />
              Anywhere, Anytime.
            </h2>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon-wrapper"></div>
                <div className="feature-text">
                  <h4 className="feature-title">The Unified Zeus Shopping App</h4>
                  <p className="feature-description-text">
                    Track orders in real time, scan items to compare prices instantly,
                    and receive instant updates on flash sales across iOS and Android
                    devices.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper"></div>
                <div className="feature-text">
                  <h4 className="feature-title">Curated Just for You</h4>
                  <p className="feature-description-text">
                    Our intelligent discovery engine learns your unique preferences over
                    time to surface deals, personalized style guides, and home
                    essentials tailored to your routine.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper"></div>
                <div className="feature-text">
                  <h4 className="feature-title">A-to-Z Purchase Guarantee</h4>
                  <p className="feature-description-text">
                    Shop with absolute confidence. Every order placed on Zeus is backed
                    by our full protection warranty covering secure transactions, item
                    condition, and on-time arrival.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper"></div>
                <div className="feature-text">
                  <h4 className="feature-title">Hassle-Free 30-Day Returns</h4>
                  <p className="feature-description-text">
                    Didn't quite fit or changed your mind? Drop your package off at any
                    local partner hub for free return shipping with no box or label
                    required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingScreen;
