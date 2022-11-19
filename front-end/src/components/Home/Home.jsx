import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import data from '../../data';
import '../Home/Home.css';

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products')
      setProducts(result.data)
    }
  
    return () => {
      
    }
  }, [])
  
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p> {product.name} </p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
