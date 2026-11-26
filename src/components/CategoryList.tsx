import type { Product } from "../data/products";
import { getCategories } from "../utils/product";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = getCategories(items);

  return (
    <section className="container category-section">
      <h2 className="section-title">Danh mục hoa tươi</h2>
      <div className="category-list">
        {categories.map((category) => (
          <span key={category} className="category-chip">
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}
