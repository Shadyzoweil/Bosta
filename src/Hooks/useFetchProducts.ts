import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = (currentPage?: number) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;

        if (currentPage) {
          const startIndex = (currentPage - 1) * productsPerPage;
          const paginatedProducts = allProducts.slice(
            startIndex,
            startIndex + productsPerPage
          );
          setProducts(paginatedProducts);
          setTotalPages(Math.ceil(allProducts.length / productsPerPage));
        } else {
          setProducts(allProducts);
        }

        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  return { products, loading, error, totalPages };
};

export default useProducts;
