import "./ProductDetailsPage.css";
import { Screen, Section } from "../components/ui/Containers";
import useProducts from "../Hooks/useFetchProducts";

import ProductCardDetails from "../components/ProductCardDetails";
import Button from "../components/Button";
import BostaLogo from "../assets/Images/BOSTA.webp";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailsPage: React.FC = (): JSX.Element => {
  const { products, loading, error } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="loading-page-container">
        <img src={BostaLogo} alt="bosta logo" className="loading-logo" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Screen>
      <Section className="height-100vh gap-24px justify-content-flex-start ">
        <h1 className="page-title">Product Details</h1>

        <ProductCardDetails
          key={product.id}
          name={product.title}
          price={`$${product.price}`}
          category={product.category}
          src={product.image}
          alt={product.title}
          description={product.description}
        />
        <Button text="Back to products" onClick={handleNavigate} />
      </Section>
    </Screen>
  );
};

export default ProductDetailsPage;
