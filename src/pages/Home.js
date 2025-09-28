import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('price-asc');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    const sortedProducts = [...products];
    
    switch (e.target.value) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    
    setProducts(sortedProducts);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">🌿 Tinh Dầu Thiên Nhiên</h1>
        <p className="hero-subtitle">
          Khám phá bộ sưu tập tinh dầu cao cấp, được chiết xuất từ những nguyên liệu thiên nhiên tinh khiết nhất
        </p>
      </div>
      
      <div className="breadcrumbs">
        <Link to="/">Trang chủ</Link> / <Link to="/products">Danh mục</Link> / <span>TINH DẦU THIÊN NHIÊN</span>
      </div>
      
      <h1 className="page-title">Tinh Dầu Thiên Nhiên Cao Cấp - Nguyên Chất 100%</h1>
      
      <div className="main-content">
        <div className="sidebar">
          <div className="filter-section">
            <h3 className="filter-title">GIÁ</h3>
            <ul className="filter-options">
              <li><label><input type="checkbox" /> Giá dưới 100,000đ</label></li>
              <li><label><input type="checkbox" /> 100,000đ - 200,000đ</label></li>
              <li><label><input type="checkbox" /> 200,000đ - 300,000đ</label></li>
              <li><label><input type="checkbox" /> 300,000đ - 500,000đ</label></li>
              <li><label><input type="checkbox" /> 500,000đ - 700,000đ</label></li>
              <li><label><input type="checkbox" /> 700,000đ - 1,000,000đ</label></li>
              <li><label><input type="checkbox" /> Giá trên 1,000,000đ</label></li>
            </ul>
          </div>
          
          <div className="filter-section">
            <h3 className="filter-title">LOẠI SẢN PHẨM</h3>
            <ul className="filter-options">
              <li><label><input type="checkbox" /> Khác</label></li>
              <li><label><input type="checkbox" /> Tinh Dầu Thiên Nhiên</label></li>
            </ul>
          </div>
          
          <div className="filter-section">
            <h3 className="filter-title">HƯƠNG THƠM</h3>
            <ul className="filter-options">
              <li><label><input type="checkbox" /> Hương Hoa</label></li>
              <li><label><input type="checkbox" /> Hương Trái Cây</label></li>
              <li><label><input type="checkbox" /> Hương Gỗ</label></li>
              <li><label><input type="checkbox" /> Hương Thảo Mộc</label></li>
            </ul>
          </div>
        </div>
        
        <div className="products-main">
          <div className="products-header">
            <div className="sort-dropdown">
              <span>Sắp xếp:</span>
              <select value={sortBy} onChange={handleSortChange}>
                <option value="price-asc">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
                <option value="name-asc">Tên A-Z</option>
              </select>
            </div>
          </div>
          
          <div className="featured-products">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;