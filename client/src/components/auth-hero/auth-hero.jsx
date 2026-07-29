import "./auth-hero.css";
import { House } from "lucide-react";
import { Link } from "react-router-dom";

const AuthHero = () => {
  const img1 = "yellow-cloth.webp";
  const img2 = "red-nike.webp";
  const img3 = "closet.webp";
  const img4 = "pink-nike.webp";

  return (
    <div className="auth-hero-container">
      {/* Back to Home Navigation Action */}
      <Link to="/" className="back-home-btn">
        <House />
      </Link>

      <div className="brand-watermark">ZEUS</div>

      <div className="stack-canvas">
        <div className="stack-item item-one">
          <img src={img1} alt="Featured collection look 1" className="hero-img" />
        </div>
        <div className="stack-item item-two">
          <img src={img2} alt="Featured collection look 2" className="hero-img" />
        </div>
        <div className="stack-item item-three">
          <img src={img3} alt="Featured collection look 3" className="hero-img" />
        </div>
        <div className="stack-item item-four">
          <img src={img4} alt="Featured collection look 4" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default AuthHero;
