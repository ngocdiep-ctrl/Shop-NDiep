import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = [...new Set(items.map((p) => p.category))];

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
