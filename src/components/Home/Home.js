import React from 'react';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import ProductInfo from './ProductInfo';

const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  return (
    <div className="container">
      <Header />
      <div className="container">
        <h3 className="text-center">Ladies Corner</h3>
        <div className="row">
          {products
            .slice(products.length - 18, products.length - 12)
            .map((product) => (
              <ProductInfo product={product} key={product.id}></ProductInfo>
            ))}
        </div>

        <h3 className="text-center mt-5">Gents Corner</h3>
        <div className="row">
          {products
            .slice(products.length - 12, products.length - 6)
            .map((product) => (
              <ProductInfo product={product} key={product.id}></ProductInfo>
            ))}
        </div>

        <h3 className="text-center mt-5">Kids Corner</h3>
        <div className="row">
          {products
            .slice(products.length - 6, products.length)
            .map((product) => (
              <ProductInfo product={product} key={product.id}></ProductInfo>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
