import React from 'react';
import './PriceListtwo.css';

const Pricelisttwo = () => {
  const products = [
    { name: 'Hyundai KONA GL ', price: 'Rs. 59,96,000/-' },
    { name: 'Hyundai KONA GLS', price: 'Rs. 64,96,000/-' },
    { name: 'Hyundai IONIQ 5 GLS Vision Roof', price: 'Rs. 1,02,96,000/-' },
     
  ];
  
  return (
    <div className="price-list-two">
       
      <h2>Hyundai EV Models</h2>
      <br></br>
      <table className="pricelist-two-table">
        <thead>
          <tr>
            <th>Hyundai EV Cars</th>
            <th>Price ( in Rupees )</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricelisttwo;
