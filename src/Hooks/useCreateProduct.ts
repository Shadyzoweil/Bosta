import { useState } from "react";
import axios from "axios";

const useCreateProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createProduct = async (
    title: string,
    description: string,
    price: number,
    category: string,
    imageUrl: string,
    resetForm: () => void
  ) => {
    if (!title || !description || price <= 0 || !category || !imageUrl) {
      setError("All fields are required, and price must be positive.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        title,
        description,
        price,
        category,
        image: imageUrl,
      });

      if (response.status === 200) {
        setSuccess(true);
        resetForm();
      }
    } catch (err) {
      setError("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading, error, success };
};

export default useCreateProduct;
