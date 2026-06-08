import "./landing-view.css";

const LandingScreen = {
  render: async () => {
    return `
      <div class="landing-wrapper">
        
        <header class="main-header">
          <div class="brand-identity">
            <span class="brand-name">Zeus</span>
          </div>

          <nav class="nav-menu">
            <a href="#hero" class="nav-link">Home</a>
            <a href="#metrics" class="nav-link">Features</a>
            <a href="#features" class="nav-link">App Experience</a>
          </nav>

          <div class="header-actions">
            <a href="#/signin" class="cta-button-login">Login</a>
          </div>
        </header>

        <section id="hero" class="hero-section">
          <div class="hero-content">
            <h1 class="hero-headline">
              Control your fulfillment<br>like never before.
            </h1>
            <p class="hero-subtext">
              Real-time order tracking, advanced marketplace analytics, and seamless inventory management—all in one powerful marketplace platform.
            </p>
          </div>
        </section>

        <section id="metrics" class="metrics-section">
          <div class="section-intro">
            <h2 class="section-title">The Ultimate Shopping Experience.</h2>
            <p class="section-subtitle">
              Discover millions of products with ultra-fast delivery, unbeatable buyer protection, and personalized recommendations curated just for you.
            </p>
          </div>

          <div class="metrics-grid">
            <div class="metric-card">
              <span class="metric-label">Prime Delivery</span>
              <h3 class="metric-value">Same Day</h3>
              <p class="metric-caption">fast, free shipping</p>
              <p class="metric-description">
                Get your essentials delivered right to your doorstep within hours on millions of eligible household, tech, and lifestyle items.
              </p>
            </div>

            <div class="metric-card">
              <span class="metric-label">Secure Checkout</span>
              <h3 class="metric-value">1-Click</h3>
              <p class="metric-caption">seamless payment processing</p>
              <p class="metric-description">
                Save your details securely to buy in an instant with comprehensive fraud protection and hassle-free 30-day return guarantees.
              </p>
            </div>

            <div class="metric-card">
              <span class="metric-label">Massive Selection</span>
              <h3 class="metric-value">10M+</h3>
              <p class="metric-caption">products across all categories</p>
              <p class="metric-description">
                Explore a limitless catalog from top global brands and trusted local sellers, covering electronics, fashion, home goods, and daily essentials.
              </p>
            </div>
          </div>
        </section>

        <section id="features" class="compatibility-section">
          <div class="compatibility-container">
            <div class="features-panel">
              <h2 class="features-headline">
                Shop Smarter.<br>Anywhere, Anytime.
              </h2>

              <div class="features-list">
                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                  </div>
                  <div class="feature-text">
                    <h4 class="feature-title">The Unified Zeus Shopping App</h4>
                    <p class="feature-description-text">
                      Track orders in real time, scan items to compare prices instantly, and receive instant updates on flash sales across iOS and Android devices.
                    </p>
                  </div>
                </div>

                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                  
                  </div>
                  <div class="feature-text">
                    <h4 class="feature-title">Curated Just for You</h4>
                    <p class="feature-description-text">
                      Our intelligent discovery engine learns your unique preferences over time to surface deals, personalized style guides, and home essentials tailored to your routine.
                    </p>
                  </div>
                </div>

                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                   
                  </div>
                  <div class="feature-text">
                    <h4 class="feature-title">A-to-Z Purchase Guarantee</h4>
                    <p class="feature-description-text">
                      Shop with absolute confidence. Every order placed on Zeus is backed by our full protection warranty covering secure transactions, item condition, and on-time arrival.
                    </p>
                  </div>
                </div>

                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                                      </div>
                  <div class="feature-text">
                    <h4 class="feature-title">Hassle-Free 30-Day Returns</h4>
                    <p class="feature-description-text">
                      Didn't quite fit or changed your mind? Drop your package off at any local partner hub for free return shipping with no box or label required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    `;
  },
  after_render: async () => {},
};

export default LandingScreen;
