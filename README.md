# Shop-NDiep – Lab 01-B

Trang chủ tiệm hoa tươi **Shop-NDiep** xây dựng bằng **React + TypeScript + Vite** cho học phần *Công nghệ lập trình hiện đại* (Lab 1).

## Cấu trúc thư mục

```text
src/
├── components/
│   ├── Banner.tsx        # BTVN 1: Khối khuyến mãi hoa tươi
│   ├── CategoryList.tsx  # BTVN 2: Danh mục hoa lọc từ mảng products
│   ├── Header.tsx        # Thanh điều hướng & giỏ hàng
│   ├── ProductCard.tsx   # Thẻ sản phẩm (+ BTVN 3: nhãn Hết hàng & khóa nút mua)
│   ├── ProductList.tsx   # Lưới sản phẩm tự co giãn
│   └── Footer.tsx        # Chân trang
├── data/
│   └── products.ts       # Kiểu dữ liệu Product & danh sách 6 loại hoa (ảnh thật)
├── App.tsx
├── App.css
└── main.tsx
```

## Khởi chạy dự án

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ terminal in ra (mặc định `http://localhost:5173`).
