import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <div className="product-thumb">
        <img src={product.image} alt={product.name} />
        {outOfStock && <span className="out-of-stock-badge">Hết hàng</span>}
      </div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <button type="button" className="btn" disabled={outOfStock}>
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
