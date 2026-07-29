import "./new-product-view.css";
// Reuses the auth form field styling so inputs match the rest of the app.
import "../../components/signin-form/signin-form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Button from "../../components/ui/button/button.jsx";
import { MUTATIONS } from "../../services/product-services.js";

const NewProductScreen = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await MUTATIONS.postProduct({
        name: form.name,
        price: Number(form.price),
        description: form.description || null,
        image: form.image || null,
      });
      // New ads land in "pending", so the profile is where they show up.
      navigate("/profile");
    } catch (err) {
      const first = Object.values(err.errors || {})[0];
      setError(first?.[0] || err.message || "Could not post the ad.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="new-product-layout">
      <Header />

      <main className="new-product-container">
        <h1 className="new-product-heading">Post an ad</h1>
        <p className="new-product-subtitle">
          New ads start as pending and appear in the marketplace once approved.
        </p>

        <form className="new-product-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="product-name" className="field-label">
              Title
            </label>
            <input
              id="product-name"
              className="form-input"
              type="text"
              required
              maxLength={255}
              placeholder="Tesla Model 3"
              value={form.name}
              onChange={update("name")}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price" className="field-label">
              Price
            </label>
            <input
              id="product-price"
              className="form-input"
              type="number"
              required
              min="0"
              step="1"
              placeholder="42999"
              value={form.price}
              onChange={update("price")}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-image" className="field-label">
              Image URL
            </label>
            <input
              id="product-image"
              className="form-input"
              type="url"
              placeholder="https://images.unsplash.com/photo-..."
              value={form.image}
              onChange={update("image")}
            />
            <span className="field-hint">Optional — paste a link to a photo.</span>
          </div>

          <div className="input-group">
            <label htmlFor="product-description" className="field-label">
              Description
            </label>
            <textarea
              id="product-description"
              className="form-input"
              maxLength={2000}
              placeholder="Tell buyers what makes it worth the price."
              value={form.description}
              onChange={update("description")}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="new-product-actions">
            <Button type="submit" disabled={submitting}>
              {submitting ? "Posting…" : "Post ad"}
            </Button>
            <Button type="button" variant="btn-outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewProductScreen;
