import "./auth-hero.css";

const AuthHero = {
  render: async () => {
    const img1 = "yellow-cloth.webp";
    const img2 = "red-nike.webp";
    const img3 = "closet.webp";
    const img4 = "pink-nike.webp";

    return `
      <div class="auth-hero-container">
        <!-- Back to Home Navigation Action -->
        <a href="#/" class="back-home-btn">
<i data-lucide="house"></i>
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
