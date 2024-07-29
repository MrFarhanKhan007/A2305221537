import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000')  // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.productName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
