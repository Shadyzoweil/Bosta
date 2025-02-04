import React, { useState, useEffect } from "react";
import axios from "axios";
import useCreateProduct from "../Hooks/useCreateProduct";
import "./ProductPage.css";
import Button from "../components/Button";
import { Screen, Section } from "../components/ui/Containers";
import { useNavigate } from "react-router-dom";

const ProductPage: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  const { createProduct, loading, error, success } = useCreateProduct();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch(() => console.error("Error fetching categories"));
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPrice(0);
    setCategory("");
    setImageUrl("");
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    createProduct(title, description, price, category, imageUrl, resetForm);
  };

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Screen>
      <Section className="height-100vh section-inline-padding">
        <h1 className="page-title">Product</h1>
        <div className="product-page">
          <h1 className="create-new-product">Create New Product</h1>

          {success && (
            <div className="success-message">Product created successfully!</div>
          )}

          <form onSubmit={handleSubmit} className="product-form">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <Button
                text={loading ? "Submitting..." : "Submit"}
                disabled={loading}
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
        <Button text="back" onClick={handleNavigate} />
      </Section>
    </Screen>
  );
};

export default ProductPage;
