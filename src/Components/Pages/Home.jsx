 import React, { useMemo, useState } from "react";

const categories = [
  { name: "All", icon: "✦" },
  { name: "men's clothing", icon: "👕" },
  { name: "women's clothing", icon: "👗" },
  { name: "electronics", icon: "🎧" },
  { name: "jewelery", icon: "💎" },
];

const Home = ({ products = [], onAddToCart = () => {} }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, activeCategory]);

  return (
    <main className="shopmoree">
      {/* Navigation  */}

      {/* Hero section */}
      <section className="sm-hero">
        <div className="sm-hero-content">
          <span className="sm-eyebrow">
            ✦ YOUR EVERYDAY SHOPPING DESTINATION
          </span>

          <h1>
            Find your next
            <br />
            <span>favorite thing.</span>
          </h1>

          <p>
            Discover products you'll love, explore new
            styles, and find something special for every day.
          </p>

          <div className="sm-hero-actions">
            <a href="#products" className="sm-primary-btn">
              Start Shopping <span>→</span>
            </a>
            <a href="#categories" className="sm-secondary-btn">
              Explore Categories
            </a>
          </div>

          <div className="sm-trust">
            <div className="sm-trust-item">
              <strong>Quality</strong>
              <span>Products you'll love</span>
            </div>
            <div className="sm-trust-item">
              <strong>Easy</strong>
              <span>Effortless shopping</span>
            </div>
            <div className="sm-trust-item">
              <strong>Secure</strong>
              <span>Shop with confidence</span>
            </div>
          </div>
        </div>

        <div className="sm-hero-visual">
          <div className="sm-orbit sm-orbit-one" />
          <div className="sm-orbit sm-orbit-two" />

          <div className="sm-hero-badge">
            <span>✦</span>
            <div>
              <strong>Made for you</strong>
              <small>Discover more</small>
            </div>
          </div>

          <div className="sm-hero-emoji">
            <span>🛍️</span>
            <span>🎧</span>
            <span>👟</span>
            <span>⌚</span>
          </div>

          <div className="sm-floating-card">
            <span className="sm-live-dot" />
            Your next find is waiting
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sm-section" id="categories">
        <div className="sm-section-heading">
          <div>
            <span className="sm-section-label">EXPLORE OUR STORE</span>
            <h2>Shop by category</h2>
          </div>
          <p>Everything you need, all in one place.</p>
        </div>

        <div className="sm-category-grid">
          {categories.slice(1).map((category) => (
            <button
              className="sm-category-card"
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name);
                document.getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="sm-category-icon">
                {category.icon}
              </span>
              <span>{category.name === "jewelery"
                ? "Jewelry"
                : category.name.replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
              <span className="sm-category-arrow">↗</span>
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="sm-section sm-products-section" id="products">
        <div className="sm-section-heading">
          <div>
            <span className="sm-section-label">HANDPICKED FOR YOU</span>
            <h2>Discover our products</h2>
          </div>
          <span className="sm-product-count">
            {filteredProducts.length} products
          </span>
        </div>

        <div className="sm-toolbar">
          <div className="sm-filter-list">
            {categories.map((category) => (
              <button
                key={category.name}
                className={
                  activeCategory === category.name
                    ? "sm-filter active"
                    : "sm-filter"
                }
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name === "All"
                  ? "All Products"
                  : category.name === "jewelery"
                  ? "Jewelry"
                  : category.name.replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>

          <input
            className="sm-search"
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="sm-product-grid">
          {filteredProducts.map((product) => (
            <article className="sm-product-card" key={product.id}>
              <div className="sm-product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
                <span className="sm-product-tag">Discover</span>
              </div>

              <div className="sm-product-info">
                <span className="sm-product-category">
                  {product.category}
                </span>
                <h3 title={product.title}>{product.title}</h3>

                <div className="sm-product-rating">
                  <span>★</span>
                  {product.rating?.rate ?? "New"}
                  {product.rating?.count != null && (
                    <small>({product.rating.count})</small>
                  )}
                </div>

                <div className="sm-product-bottom">
                  <strong>₹{Number(product.price).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}</strong>

                  <button
                    className="sm-add-btn"
                    onClick={() => onAddToCart(product)}
                    aria-label={`Add ${product.title} to cart`}
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="sm-empty">
            <span>🔎</span>
            <h3>No products found</h3>
            <p>Try another search or select a different category.</p>
            <button
              className="sm-primary-btn"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Promo banner */}
      <section className="sm-promo">
        <div>
          <span className="sm-section-label">YOUR NEXT GREAT FIND</span>
          <h2>Good finds. Great vibes.</h2>
          <p>Explore our collection and find something worth loving.</p>
        </div>
        <a href="#products" className="sm-promo-btn">
          Browse Collection ↗
        </a>
      </section>

      {/* Footer */}
      <footer className="sm-footer">
        <a href="/" className="sm-logo">
          Shop<span>Moree</span><b>.</b>
        </a>
        <p>Discover more. Shop smarter.</p>
        <span>© {new Date().getFullYear()} ShopMoree. All rights reserved.</span>
      </footer>
    </main>
  );
};

export default Home;
 
