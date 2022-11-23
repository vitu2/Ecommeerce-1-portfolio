import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css'

export default function Product() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
  return <div>Product</div>;
}
