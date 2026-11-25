import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <div id="products">
          <ProductList title="Mẫu hoa tươi nổi bật" items={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
