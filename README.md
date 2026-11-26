# Shop-NDiep – Lab 01-B & Lab 02

Trang chủ tiệm hoa tươi **Shop-NDiep** xây dựng bằng **React + TypeScript + Vite** cho học phần *Công nghệ lập trình hiện đại*.

## Cấu trúc thư mục

```text
├── playground/
│   ├── es6.ts            # Lab 2: Thực hành 9 chủ đề cú pháp ES6+
│   └── test-cart.ts      # Lab 2: Kiểm thử hàm giỏ hàng & lọc hoa bằng Node.js
└── src/
    ├── components/
    │   ├── Banner.tsx        # Khối khuyến mãi hoa tươi
    │   ├── CategoryList.tsx  # Danh mục hoa (dùng getCategories)
    │   ├── Header.tsx        # Thanh điều hướng & giỏ hàng
    │   ├── ProductCard.tsx   # Thẻ sản phẩm (dùng formatPrice + nhãn Hết hàng)
    │   ├── ProductList.tsx   # Lưới sản phẩm tự co giãn
    │   └── Footer.tsx        # Chân trang
    ├── data/
    │   └── products.ts       # Kiểu dữ liệu Product & danh sách 6 loại hoa
    ├── utils/
    │   ├── format.ts         # Định dạng tiền tệ formatPrice
    │   ├── product.ts        # getCategories & filterProducts
    │   └── cart.ts           # 5 hàm xử lý giỏ hàng bất biến
    ├── App.tsx
    ├── App.css
    └── main.tsx
```

## Khởi chạy dự án

```bash
npm install
npm run dev
node playground/es6.ts
node playground/test-cart.ts
```
