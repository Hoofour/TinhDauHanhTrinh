// Dữ liệu tinh dầu thiên nhiên
const essentialOils = [
  {
    id: 1,
    title: "Tinh dầu Lavender",
    price: 250000,
    description: "Tinh dầu Lavender nguyên chất, giúp thư giãn và ngủ ngon hơn. Chiết xuất từ hoa Lavender Pháp.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=300&fit=crop",
    category: "thư-giãn"
  },
  {
    id: 2,
    title: "Tinh dầu Tea Tree",
    price: 180000,
    description: "Tinh dầu Tea Tree kháng khuẩn tự nhiên, hỗ trợ điều trị mụn và vấn đề da.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
    category: "chăm-sóc-da"
  },
  {
    id: 3,
    title: "Tinh dầu Eucalyptus",
    price: 220000,
    description: "Tinh dầu Bạch đàn giúp thông mũi, giảm ho và cải thiện hô hấp.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    category: "hô-hấp"
  },
  {
    id: 4,
    title: "Tinh dầu Peppermint",
    price: 200000,
    description: "Tinh dầu Bạc hà tinh khiết, giúp tỉnh táo và giảm đau đầu hiệu quả.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
    category: "tỉnh-táo"
  },
  {
    id: 5,
    title: "Tinh dầu Lemon",
    price: 160000,
    description: "Tinh dầu Chanh tươi mát, khử mùi và làm sạch không khí tự nhiên.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=300&fit=crop",
    category: "làm-sạch"
  },
  {
    id: 6,
    title: "Tinh dầu Rose",
    price: 450000,
    description: "Tinh dầu Hoa hồng Damask cao cấp, dưỡng da và cân bằng cảm xúc.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    category: "dưỡng-da"
  },
  {
    id: 7,
    title: "Tinh dầu Frankincense",
    price: 380000,
    description: "Tinh dầu Nhũ hương quý hiếm, giúp thiền định và tinh thần bình an.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
    category: "thiền-định"
  },
  {
    id: 8,
    title: "Tinh dầu Chamomile",
    price: 280000,
    description: "Tinh dầu Cúc La Mã dịu nhẹ, làm dịu da nhạy cảm và giảm stress.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=300&fit=crop",
    category: "dịu-da"
  }
];

export const fetchProducts = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return essentialOils;
};

export const fetchProductById = async (id) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  const product = essentialOils.find(p => p.id === parseInt(id));
  return product || null;
};