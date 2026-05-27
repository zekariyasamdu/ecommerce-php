import "./landing-view.css";

const LandingScreen = {
  render: async () => {
    return `
      <div class="landing-container">
        <header class="hero-wrapper">
          <div class="custom-navbar">
            <div class="brand-logo">Runova</div>

            <nav class="nav-links">
              <a href="#" class="nav-item active">Home</a>
              <a href="#" class="nav-item">Shop All</a>
              <a href="#" class="nav-item">Apparel</a>
              <a href="#" class="nav-item">Equipment</a>
              <a href="#" class="nav-item">Contact</a>
            </nav>

            <div class="nav-actions">
              <button class="icon-search-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              
              <a href="#" class="cta-cart-btn">
                View Cart
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <main class="hero-body">
            <div class="hero-left-info">
              <div class="stacked-users">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Customer 1" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Customer 2" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Customer 3" />
              </div>
              <p class="hero-description">
                Engineered for peak performance. Explore our newly released collection of premium sportswear and elite training gear designed to push boundaries.
              </p>
            </div>

            <div class="hero-promo-card">
              <div class="promo-img-holder">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80" alt="New Drop Sneaker" />
              </div>
              <div class="promo-text-holder">
                <h4>Limited Drop<br>Available</h4>
                <p>Get instant access to limited-edition performance drops before they sell out.</p>
              </div>
            </div>
          </main>

          <div class="hero-giant-title-container">
            <h1 class="giant-headline">
              Sports<br>Passion
            </h1>
          </div>
        </header>

        <main class="workspace-canvas">
          
          <section class="section-editorial">
            <div class="editorial-top-row">
              <div class="editorial-thumb-wrapper">
                <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80" alt="Premium fabric detail" />
              </div>
              <h2 class="editorial-heading">
                At Runova, we redefine how premium gear meets purpose. <span class="muted-text-span">From advanced moisture-wicking fabrics to ergonomic construction built for the elite.</span>
              </h2>
            </div>

            <div class="editorial-grid-details">
              <div class="editorial-col-left">
                <div>
                  <span class="pill-badge">About Runova</span>
                </div>
                <div class="margin-top-auto">
                  <p class="body-text-dark">
                    Whether you are pacing your first mile or chasing an Olympic standard, our gear is crafted to eliminate friction and elevate speed.
                  </p>
                  <a href="#" class="pill-dark-button">
                    Shop Collection
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="editorial-col-center">
                <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&auto=format&fit=crop&q=80" alt="Athlete sprinting" />
              </div>

              <div class="editorial-col-right">
                <p class="body-text-dark">
                  Gain exclusive access to upcoming capsule drops, seasonal colorways, and community laboratory insights.
                </p>
                <div class="interactive-plus-card">
                  <div class="img-fill-holder">
                    <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&auto=format&fit=crop&q=80" alt="Technical running jacket" />
                  </div>
                  <button class="floating-plus-btn">+</button>
                </div>
              </div>
            </div>
          </section>

          <section class="section-categories">
            <div class="section-header-row">
              <h2 class="section-title-bold">
                <span class="light-text">Explore</span> Apparel
              </h2>
              <p class="section-desc-right">
                Engineered threads and structured layers crafted to move seamlessly during maximum exertion.
              </p>
            </div>

            <div class="category-cards-container">
              <div class="category-card image-card-gradient">
                <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=80" alt="Outerwear catalog" />
                <div class="card-overlay-content">
                  <p class="card-title-text">All-Weather Aero Shells</p>
                </div>
              </div>

              <div class="category-card card-wide glass-blur-card">
                <img src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=700&auto=format&fit=crop&q=80" alt="Track collection" />
                <div class="blur-footer-bar">
                  <div class="blur-bar-left">
                    <span class="inner-pill">Pro Track Collective</span>
                    <p class="blur-bar-title">Lightweight armor built to combat recovery and speed goals.</p>
                  </div>
                  <a href="#" class="inner-circle-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="category-card image-card-gradient">
                <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&auto=format&fit=crop&q=80" alt="Compression gear" />
                <div class="card-overlay-content">
                  <p class="card-title-text">Elite Element Isolation Layers</p>
                </div>
              </div>

              <div class="category-card image-card-gradient">
                <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&auto=format&fit=crop&q=80" alt="Footwear catalog" />
                <div class="card-overlay-content">
                  <p class="card-title-text">Hyper-Responsive Track Solids</p>
                </div>
              </div>
            </div>
          </section>

          <section class="section-products">
            <div class="section-header-row">
              <div class="badge-col-left">
                <div>
                  <span class="pill-badge">Our Products</span>
                </div>
                <p class="body-text-dark margin-top-md">
                  Carefully balanced analytical engineering packed straight into wearable foot mechanics.
                </p>
              </div>
              <h2 class="section-title-bold max-w-700">
                <span>At Runova, </span><span class="light-text">Precision Powers </span><span>Every Step</span>
              </h2>
            </div>

            <div class="product-grid-display">
              <div class="product-item-card">
                <div class="product-image-window">
                  <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&auto=format&fit=crop&q=80" alt="Runova Air Velocity X1" />
                  <button class="add-to-cart-bag" aria-label="Add to cart">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
                </div>
                <div class="product-metadata">
                  <h4>Runova Air Velocity X1</h4>
                  <span class="product-price">$129 USD</span>
                </div>
              </div>

              <div class="product-item-card">
                <div class="product-image-window">
                  <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80" alt="Runova Prism Cushion Aero" />
                  <button class="add-to-cart-bag" aria-label="Add to cart">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
                </div>
                <div class="product-metadata">
                  <h4>Prism Cushion Aero</h4>
                  <span class="product-price">$145 USD</span>
                </div>
              </div>

              <div class="product-item-card">
                <div class="product-image-window">
                  <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&auto=format&fit=crop&q=80" alt="Runova Carbon Track Elite" />
                  <button class="add-to-cart-bag" aria-label="Add to cart">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
                </div>
                <div class="product-metadata">
                  <h4>Carbon Track Elite</h4>
                  <span class="product-price">$180 USD</span>
                </div>
              </div>

              <div class="product-item-card">
                <div class="product-image-window">
                  <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=80" alt="Runova Apex Court Pro" />
                  <button class="add-to-cart-bag" aria-label="Add to cart">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
                </div>
                <div class="product-metadata">
                  <h4>Apex Court Pro</h4>
                  <span class="product-price">$135 USD</span>
                </div>
              </div>
            </div>
          </section>

          <section class="section-testimonial">
            <div class="testimonial-header-row">
              <div class="quote-giant-mark">“</div>
              <div class="testimonial-avatar-bubble">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" alt="Noah Carter" />
              </div>
            </div>

            <div class="testimonial-content-block">
              <h2 class="testimonial-quote-text">
                "OVER A YEAR TESTING RUNOVA GEAR <span class="light-text">THE ABSOLUTE HIGHEST COMPRESSION</span> AND ULTIMATE DURABILITY!"
              </h2>
            </div>

            <div class="testimonial-footer-row">
              <div class="profile-meta-group">
                <span class="pill-badge">Testimonial</span>
                <div class="user-info-stamp">
                  <div class="stamp-pic">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Noah Carter Mini" />
                  </div>
                  <div>
                    <h5>Noah Carter</h5>
                    <p>Product Specialist</p>
                  </div>
                </div>
              </div>

              <div class="carousel-nav-arrows">
                <button class="circle-arrow-btn stroke-only" aria-label="Previous quote">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button class="circle-arrow-btn filled-dark" aria-label="Next quote">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <section class="section-facilities">
            <div class="facilities-container">
              <div class="facilities-left-panel">
                <h2 class="facilities-main-heading">
                  <span class="heading-accent">Take a look at</span><br>
                  <span class="heading-focus">Facilities</span>
                </h2>

                <p class="facilities-description">
                  Whether you're training for your first race or your next championship, Runova keeps you motivated with world-class facilities designed to help you move smarter, faster, and stronger.
                </p>

                <div class="facilities-hero-img-holder">
                  <img src="https://via.placeholder.com/480x310" alt="Badminton rackets and shoes" />
                </div>
              </div>

              <div class="facilities-right-panel">
                <div class="facility-row active-feature">
                  <div class="facility-info-block">
                    <h3 class="facility-title">Indoor Training Arena</h3>
                    <p class="facility-caption">
                      Perfect for all-weather practice with AI-assisted performance tracking and smart temperature control.
                    </p>
                    <a href="#" class="pill-outline-btn">
                      Get In Touch
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>

                  <div class="facility-thumb-holder">
                    <img src="https://via.placeholder.com/110x110" alt="Running track spike detail" />
                  </div>
                </div>

                <div class="facility-row listing-item">
                  <h3 class="facility-title">Outdoor Running Track</h3>
                  <div class="icon-circle-trigger">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <div class="facility-row listing-item">
                  <h3 class="facility-title">Strength & Conditioning Zone</h3>
                  <div class="icon-circle-trigger">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <div class="facility-row listing-item margin-bottom-lg">
                  <h3 class="facility-title">Recovery & Wellness Studio</h3>
                  <div class="icon-circle-trigger">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                <a href="#" class="pill-solid-dark-btn">
                  Get In Touch
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <section class="section-community">
            <div class="community-container">
              <div class="community-left-panel">
                <div>
                  <span class="badge-outline">Contact Us</span>
                </div>

                <h2 class="community-main-heading">
                  <span class="heading-accent">Runova Invites You</span><br>
                  <span class="heading-focus">Join Community</span>
                </h2>

                <div class="input-form-holder">
                  <input type="email" placeholder="Enter your email address..." class="round-text-input" />
                  <button type="submit" class="floating-submit-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="community-right-panel">
                <img src="https://via.placeholder.com/450x420" alt="Female badminton player on court" />
              </div>
            </div>
          </section>

        </main>

        <footer class="brand-footer-wrapper">
          <div class="footer-inner-content">
            <div class="footer-callout-block">
              <p class="footer-subtitle">Ready to host your next tournament?</p>
              <h2 class="footer-giant-cta">Let's Go!</h2>
            </div>

            <div class="footer-links-grid">
              <div class="footer-about-col">
                <h3 class="footer-logo-title">Runova</h3>
                <p class="footer-about-text">
                  Whether you're training for your first race or your next championship, Runova keeps you motivated with world-class facilities designed to elevate your performance boundaries.
                </p>
              </div>

              <div class="footer-nav-links-columns">
                <div class="links-stack">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Membership</a>
                  <a href="#">Event</a>
                  <a href="#">Contact</a>
                </div>

                <div class="links-stack">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Use</a>
                  <a href="#">Changelog</a>
                  <a href="#">Help Center</a>
                  <a href="#">Security</a>
                </div>

                <div class="links-stack">
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">Instagram</a>
                  <a href="#">Help Center</a>
                  <a href="#">Linkedin</a>
                </div>
              </div>
            </div>

            <div class="footer-bottom-bar">
              <span class="legal-copy">Copyright 2026 Runova</span>
              <span class="legal-copy">All rights reserved @ 2026 thought.com</span>
            </div>
          </div>
        </footer>
      </div>
    `;
  },
  after_render: async () => {}
};

export default LandingScreen;