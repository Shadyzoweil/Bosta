import "./ProductCardDetails.css";
import Button from "./Button";

interface IProductCardDetails {
  src?: string;
  alt?: string;
  name: string;
  price: string;
  category: string;
  description: string;
}

const ProductCardDetails: React.FC<IProductCardDetails> = ({
  src,
  alt,
  name,
  price,
  category,
  description,
}): JSX.Element => {
  return (
    <div className="detailed-product-card">
      <img src={src} alt={alt} className="detailed-product-card-image" />

      <div className="detailed-product-card-details">
        <h2 className="detailed-product-card-name">{name}</h2>
        <p>{description}</p>
        <p className="product-p">{category}</p>
        <p>{price}</p>
        <Button text="Add to Cart" />
      </div>
    </div>
  );
};

export default ProductCardDetails;
