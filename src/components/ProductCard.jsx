import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addProduct }) => {
  // Mock variants for demo (real projects: get from API)
  const [variant, setVariant] = useState(
    product.variants ? product.variants[0] : ""
  );

  return (
    <div className="card text-center h-100 shadow rounded-4 p-2 border-0" style={{ background: "#fff" }}>
      <img
        className="card-img-top p-3 rounded-3"
        src={product.image}
        alt={product.title}
        style={{ height: 220, objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-1">
          {product.title.length > 22 ? product.title.substring(0, 22) + "..." : product.title}
        </h5>
        <p className="card-text text-muted" style={{ minHeight: 44 }}>
          {product.description.length > 55 ? product.description.substring(0, 55) + "..." : product.description}
        </p>
        {/* Variant Dropdown */}
        {product.variants && (
          <select
            className="form-select mb-3"
            style={{ fontWeight: 500 }}
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            {product.variants.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        )}
        <div>
          <span className="badge bg-primary fs-6 mb-2">
            ₹{Math.round(product.price * 83)}
          </span>
        </div>
        {product.available ? (
          <button
            className="btn btn-dark mt-2 w-100"
            onClick={() => addProduct({ ...product, selectedVariant: variant })}
          >
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-outline-danger mt-2 w-100" disabled>
            Out of Stock
          </button>
        )}
        <Link
          to={"/product/" + product.id}
          className="btn btn-link mt-1"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
