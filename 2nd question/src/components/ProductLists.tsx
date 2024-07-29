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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=0&maxPrice=10000',
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIyMjQ4NzczLCJpYXQiOjE3MjIyNDg0NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU4OTdmZjhmLTE3OGUtNGE1Ny05NDFlLTNhMDZkODBjYjFmOSIsInN1YiI6ImZhcmhhbi5raGFuM0BzLmFtaXR5LmVkdSJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZE1lZCIsImNsaWVudElEIjoiZTg5N2ZmOGYtMTc4ZS00YTU3LTk0MWUtM2EwNmQ4MGNiMWY5IiwiY2xpZW50U2VjcmV0IjoiQXdodkRwV3dXV3FlbGJTaSIsIm93bmVyTmFtZSI6IkZhcmhhbiIsIm93bmVyRW1haWwiOiJmYXJoYW4ua2hhbjNAcy5hbWl0eS5lZHUiLCJyb2xsTm8iOiJBMjMwNTIyMTUzNyJ9.o4gK0BnjUS1DV5agyOajMcJEk7oIvRHA0uM9KQspdSk",
        }

      }
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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