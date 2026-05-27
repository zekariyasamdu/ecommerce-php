import "./AuthHero.css";

const AuthHero = {
  render: async () => {
    const img1 =
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop";
    const img2 =
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop";
    const img3 =
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600&auto=format&fit=crop";
    const img4 =
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop";

    return `
      <div class="auth-hero-container">
        <!-- Back to Home Navigation Action -->
        <a href="#/" class="back-home-btn">
          <img alt="home-icon" src="https://cdn-icons-png.flaticon.com/512/2549/2549900.png" width="20" height="20"/>
        </a>

        <div class="brand-watermark">ZEUS</div>
        
        <div class="stack-canvas">
          <div class="stack-item item-one">
            <img src="${img1}" alt="Featured collection look 1" class="hero-img" />
          </div>
          <div class="stack-item item-two">
            <img src="${img2}" alt="Featured collection look 2" class="hero-img" />
          </div>
          <div class="stack-item item-three">
            <img src="${img3}" alt="Featured collection look 3" class="hero-img" />
          </div>
          <div class="stack-item item-four">
            <img src="${img4}" alt="Featured collection look 4" class="hero-img" />
          </div>
        </div>
      </div>
    `;
  },
  after_render: async () => {
    // Purely presentational component
  },
};

export default AuthHero;
