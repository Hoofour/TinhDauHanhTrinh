import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>🌿 Essential Oils</h3>
          <p>Chuyên cung cấp tinh dầu thiên nhiên cao cấp, được chiết xuất từ những nguyên liệu tinh khiết nhất.</p>
        </div>
        
        <div className="footer-section">
          <h4>Liên hệ</h4>
          <div className="contact-info">
            <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
            <p>📞 0123 456 789</p>
            <p>✉️ info@essentialoils.com</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Dịch vụ</h4>
          <ul>
            <li>Giao hàng tận nơi</li>
            <li>Đổi trả trong 7 ngày</li>
            <li>Tư vấn miễn phí</li>
            <li>Bảo hành chất lượng</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Theo dõi chúng tôi</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘 Facebook</a>
            <a href="#" aria-label="Instagram">📷 Instagram</a>
            <a href="#" aria-label="TikTok">🎵 TikTok</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Essential Oils. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;