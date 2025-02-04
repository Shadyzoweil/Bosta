import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../Hooks/useFetchProducts";
import { Screen } from "../components/ui/Containers";
import "./ProductListingPage.css";
import BostaLogo from "../assets/Images/BOSTA.webp";
import Sort from "../components/Sorting";
import Pagination from "../components/Pagination";
import { Section } from "../components/ui/Containers";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ProductListingPage: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, error, totalPages } = useProducts(currentPage);
  const [sortOption, setSortOption] = useState<string>("");
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="loading-page-container">
        <img src={BostaLogo} alt="bosta logo" className="loading-logo" />
      </div>
    );
  if (error) return <div>{error}</div>;

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    } else if (sortOption === "price-desc") {
      return b.price - a.price;
    } else if (sortOption === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  const handleNavigate = () => {
    navigate("/product");
  };
  return (
    <Screen>
      <Section className="gap-24px">
        <h1 className="page-title">Products</h1>
        <div className="wide-div">
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
          <Button text="Create Product" onClick={handleNavigate} />
        </div>

        <div className="products-container">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              price={`$${product.price}`}
              category={product.category}
              src={product.image}
              alt={product.title}
            />
          ))}
        </div>
      </Section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </Screen>
  );
};

export default ProductListingPage;
