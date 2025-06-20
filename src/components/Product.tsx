// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../store/hooks.ts";
import { addToCart } from "../store/slices/cartSlice.ts";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export const Product = ({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price }));
  };

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};
