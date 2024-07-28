import React from 'react'
import './PriceListten.css'
const PriceListten = () => {
     const products = [
    { name: 'Citroen e63 Shine', price: 'Rs. 35,00,000/-' },
    
  ];

  return (
     <>
     <div className="price-list-ten">
       
      <h2>Citroen EV Models</h2>
      <br></br>
      <table className="pricelist-ten-table">
        <thead>
          <tr>
            <th>Citroen EV Cars</th>
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
     </>
  )
}

export default PriceListten
