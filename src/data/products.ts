export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "Bó hoa hồng tươi sắc thắm", price: 450000, image: "/images/hoa-hong-do.jpg", category: "Hoa bó", stock: 10 },
  { id: 2, name: "Hoa hướng dương nắng sớm", price: 320000, image: "/images/hoa-huong-duong.jpg", category: "Hoa bó", stock: 14 },
  { id: 3, name: "Hoa tulip hồng Hà Lan", price: 520000, image: "/images/hoa-tulip-hong.jpg", category: "Hoa nhập khẩu", stock: 0 },
  { id: 4, name: "Giỏ hoa cẩm tú cầu xanh", price: 480000, image: "/images/hoa-cam-tu-cau.jpg", category: "Giỏ hoa", stock: 6 },
  { id: 5, name: "Chậu lan hồ điệp trắng", price: 890000, image: "/images/lan-ho-diep.jpg", category: "Hoa chậu", stock: 4 },
  { id: 6, name: "Giỏ hoa cúc trắng tinh khôi", price: 290000, image: "/images/cuc-hoa-mi.jpg", category: "Giỏ hoa", stock: 18 },
];
