import "./ProductCard.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface IProductCard {
  id: number;
  src?: string;
  alt?: string;
  name: string;
  price: string;
  category: string;
}

const ProductCard: React.FC<IProductCard> = ({
  src,
  alt = "product",
  name,
  price,
  category,
  id,
}): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product-details/${id}`);
  };
  return (
    <div className="product-card">
      <img src={src} alt={alt} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-p">{category}</p>
        <p className="product-p">{price}</p>
      </div>
      <Button text="View details" onClick={handleNavigate} />
    </div>
  );
};

export default ProductCard;
