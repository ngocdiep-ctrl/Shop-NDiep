const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Shop-NDiep · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 1900 6868 · Email: lienhe@shopndiep.vn</p>
      </div>
    </footer>
  );
}
