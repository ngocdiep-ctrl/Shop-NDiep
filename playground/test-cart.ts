// Chạy: node playground/test-cart.ts
import { products } from "../src/data/products.ts";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
  countItems,
  calcTotal,
} from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import {
  filterProducts,
  getCategories,
  searchByPriceRange,
  groupByCategory,
} from "../src/utils/product.ts";

let cart: CartItem[] = [];
cart = addToCart(cart, products[0]);    // Bó hoa hồng tươi sắc thắm x1
cart = addToCart(cart, products[0], 2); // Bó hoa hồng tươi sắc thắm x3
cart = addToCart(cart, products[3]);    // Giỏ hoa cẩm tú cầu xanh x1

console.log("Số sản phẩm:", countItems(cart));           // 4
console.log("Tổng tiền:", formatPrice(calcTotal(cart))); // 1.830.000 đ

cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[3].id);
console.log(cart.map((i) => `${i.product.name} x${i.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "Hoa bó, giá tăng dần:",
  filterProducts(products, { category: "Hoa bó", sort: "asc" }).map(
    (p) => p.name
  )
);
console.log(
  "Tìm 'hoa', tối đa 400k:",
  filterProducts(products, { keyword: "hoa", maxPrice: 400000 }).map(
    (p) => p.name
  )
);

// Bài tập về nhà Lab 2
console.log(
  "Khoảng giá 300k - 500k:",
  searchByPriceRange(products, 300000, 500000).map((p) => p.name)
);
console.log("Số sản phẩm theo danh mục:", groupByCategory(products));
