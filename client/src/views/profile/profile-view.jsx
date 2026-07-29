import "./profile-view.css";
import { useCallback, useEffect, useState } from "react";
import { Archive, Mail, Phone, Plus, Send, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Card from "../../components/ui/card/card.jsx";
import Button from "../../components/ui/button/button.jsx";
import { useAuth } from "../../context/auth-context.jsx";
import { MUTATIONS, QUERY } from "../../services/product-services.js";

const ProfileScreen = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const name = isLoggedIn ? user.name : "unknown";
  const email = isLoggedIn ? user.email : "unknown@gmail.com";
  const image = isLoggedIn ? user.image : "";

  const [stats, setStats] = useState({ pending: 0, approved: 0, rejected: 0 });
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [nextStats, nextAds] = await Promise.all([
        QUERY.getMyStats(),
        QUERY.getMyProducts(),
      ]);
      setStats(nextStats);
      setAds(nextAds);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load().catch(() => setLoading(false));
  }, [load]);

  const handleDelete = async (id) => {
    await MUTATIONS.deleteProduct(id);
    await load();
  };

  return (
    <div className="profile-page-wrapper">
      <Header />

      <main className="profile-container">
        <section className="profile-header-block">
          <div className="avatar-container-outer">
            <div className="avatar-frame">
              <div className="avatar-inner-graphic">
                <img
                  src={image}
                  alt={`${name} Profile Picture`}
                  className="avatar-image-src"
                />
              </div>
            </div>
          </div>

          <div className="profile-info-details">
            <h1 className="user-display-name">{name}</h1>

            <div className="user-email-row">
              <Mail />
              <span className="user-email-text">{email}</span>
            </div>

            <div className="profile-actions-row">
              <Button
                id="btn-whatsapp"
                variant="btn-outline"
                size="btn-sm"
                className="social-profile-btn"
              >
                <Phone />
                Add WhatsApp
              </Button>
              <Button
                id="btn-telegram"
                variant="btn-outline"
                size="btn-sm"
                className="social-profile-btn"
              >
                <Send />
                Add Telegram
              </Button>
            </div>
          </div>
        </section>

        <section className="profile-stats-grid">
          <Card id="card-pending" className="dashboard-stat-card">
            <div className="stat-card-body">
              <h3 className="stat-number">{stats.pending}</h3>
              <p className="stat-label">Pending</p>
            </div>
          </Card>

          <Card id="card-approved" className="dashboard-stat-card">
            <div className="stat-card-body">
              <h3 className="stat-number">{stats.approved}</h3>
              <p className="stat-label">Approved</p>
            </div>
          </Card>

          <Card id="card-rejected" className="dashboard-stat-card">
            <div className="stat-card-body">
              <h3 className="stat-number">{stats.rejected}</h3>
              <p className="stat-label">Rejected</p>
            </div>
          </Card>
        </section>

        <section className="profile-content-tabs-wrapper">
          <div className="tabs-navigation-header">
            <button className="tab-link active-tab" data-tab="ads">
              Ads
            </button>
            <Button
              size="btn-sm"
              className="post-ad-btn"
              onClick={() => navigate("/products/new")}
            >
              <Plus />
              Post ad
            </Button>
          </div>

          <div className="tab-content-viewport">
            {loading && <p className="ads-loading">Loading your ads…</p>}

            {!loading && ads.length === 0 && (
              <div className="empty-state-card">
                <div className="empty-icon-box">
                  <Archive />
                </div>
                <h4 className="empty-state-title">No Ads Posted</h4>
                <p className="empty-state-subtitle">You haven't posted any ads yet.</p>
              </div>
            )}

            {!loading && ads.length > 0 && (
              <ul className="my-ads-list">
                {ads.map((ad) => (
                  <li className="my-ad-row" key={ad.id}>
                    <div
                      className="my-ad-image"
                      style={{ backgroundImage: `url('${ad.image}')` }}
                    />
                    <div className="my-ad-info">
                      <Link className="my-ad-name" to={`/products/${ad.id}`}>
                        {ad.name}
                      </Link>
                      <span className="my-ad-price">{ad.price}$</span>
                    </div>
                    <span className={`my-ad-status status-${ad.status}`}>
                      {ad.status}
                    </span>
                    <button
                      type="button"
                      className="my-ad-delete"
                      aria-label={`Delete ${ad.name}`}
                      onClick={() => handleDelete(ad.id)}
                    >
                      <Trash2 />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileScreen;
