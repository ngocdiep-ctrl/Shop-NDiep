import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const affordableFlowers = filterProducts(products, {
    maxPrice: 400000,
    sort: "asc",
  });
  const bouquets = filterProducts(products, { category: "Hoa bó" });

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList items={products} />
        <div id="products" className="product-sections">
          <ProductList title="Mẫu hoa tươi nổi bật" items={products} />
          <ProductList
            title="Hoa tươi giá dưới 400.000 đ"
            items={affordableFlowers}
          />
          <ProductList title="Bộ sưu tập Hoa bó" items={bouquets} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
