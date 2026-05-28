import "./landing-view.css";

const LandingScreen = {
  render: async () => {
    return `
      <div class="landing-wrapper">
        
        <!-- Combined Header & Hero Section -->
        <section id="hero" class="hero-fullscreen-wrapper">
          
          <!-- Full Screen Background Image Elements -->
          <div class="hero-bg-backdrop">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1800&auto=format&fit=crop" alt="Global Ecommerce Logistics Hub" class="fullscreen-bg-img" />
            <div class="hero-dark-overlay"></div>
          </div>

          <!-- Floating Nav Container Layered Above Backdrop -->
          <header class="main-header-floating">
            <div class="brand-identity">
              <span class="brand-name">Zeus</span>
            </div>

            <nav class="nav-menu">
              <a href="#hero" class="nav-link">Home</a>
              <a href="#metrics" class="nav-link">Features</a>
              <a href="#features" class="nav-link">App Experience</a>
            </nav>

            <div class="header-actions">
              <a href="#/login" class="cta-button-login">Login</a>
            </div>
          </header>

          <!-- Central Display Copy Layered Above Backdrop -->
          <div class="hero-fullscreen-content">
            <h1 class="hero-headline-overlay">
              Control your fulfillment<br>like never before.
            </h1>

            <p class="hero-subtext-overlay">
              Real-time order tracking, advanced marketplace analytics, and seamless inventory management—all in one powerful marketplace platform.
            </p>
          </div>

        </section>

        <!-- Metrics Section -->
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

        <!-- Compatibility & App Section -->
        <section id="features" class="compatibility-section">
          <div class="compatibility-container">
            <div class="features-panel">
              <h2 class="features-headline">
                Shop Smarter.<br>Anywhere, Anytime.
              </h2>

              <div class="features-list">
                <!-- Feature 1: Mobile App -->
                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <div class="feature-text">
                    <h4 class="feature-title">The Unified Zeus Shopping App</h4>
                    <p class="feature-description-text">
                      Track orders in real time, scan items to compare prices instantly, and receive instant updates on flash sales across iOS and Android devices.
                    </p>
                  </div>
                </div>

                <!-- Feature 2: Personalization -->
                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div class="feature-text">
                    <h4 class="feature-title">Curated Just for You</h4>
                    <p class="feature-description-text">
                      Our intelligent discovery engine learns your unique preferences over time to surface deals, personalized style guides, and home essentials tailored to your routine.
                    </p>
                  </div>
                </div>

                <!-- Feature 3: Buyer Protection -->
                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="feature-text">
                    <h4 class="feature-title">A-to-Z Purchase Guarantee</h4>
                    <p class="feature-description-text">
                      Shop with absolute absolute confidence. Every order placed on Zeus is backed by our full protection warranty covering secure transactions, item condition, and on-time arrival.
                    </p>
                  </div>
                </div>

                <!-- Feature 4: Easy Returns -->
                <div class="feature-item">
                  <div class="feature-icon-wrapper">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
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

            <!-- Right Image Panel: Showing a retail customer unboxing experience -->
            <div class="showcase-side-panel">
              <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop" alt="Excited customer shopping online and holding delivery packages" class="showcase-img" />
            </div>
          </div>
        </section>

        <!-- Brand Footer Layout -->
        <footer class="brand-footer-wrapper">
          <div class="footer-inner-content">
            
            <!-- Top Big Callout -->
            <div class="footer-callout-block">
              <p class="footer-subtitle">Ready to discover your next favorite item?</p>
              <h2 class="footer-giant-cta">Start Shopping</h2>
            </div>

            <div class="footer-links-grid">
              <div class="footer-about-col">
                <h3 class="footer-logo-title">Zeus</h3>
                <p class="footer-about-text">
                  From everyday tech and trendsetting fashion to home essentials, Zeus brings millions of products straight to your doorstep with unmatched speed and convenience.
                </p>
              </div>

              <div class="footer-nav-links-columns">
                <!-- Column 1: Departments (Removed unlinked a tags) -->
                <div class="links-stack">
                  <span>Electronics</span>
                  <span>Clothing & Fashion</span>
                  <span>Home & Kitchen</span>
                  <span>Beauty & Health</span>
                  <span>Today's Deals</span>
                </div>

                <!-- Column 2: Customer Care (Removed unlinked a tags) -->
                <div class="links-stack">
                  <span>Your Account</span>
                  <span>Track Orders</span>
                  <span>Returns & Replacements</span>
                  <span>Help Center</span>
                  <span>Privacy Notice</span>
                </div>

                <!-- Column 3: Business/Social (Removed unlinked a tags) -->
                <div class="links-stack">
                  <span>Sell on Zeus</span>
                  <span>Instagram</span>
                  <span>Twitter / X</span>
                  <span>Facebook</span>
                  <span>LinkedIn</span>
                </div>
              </div>
            </div>

            <!-- Bottom copyright metadata -->
            <div class="footer-bottom-bar">
              <span class="legal-copy">Copyright 2026 Zeus Inc.</span>
              <span class="legal-copy">All rights reserved @ 2026 zeus.com</span>
            </div>
          </div>
        </footer>

      </div>
    `;
  },
  after_render: async () => {}
};

export default LandingScreen;