import React from 'react'
import './PriceListfour.css'
const PriceListfour = () => {

    const products = [
    { name: 'Neta V ', price: 'Rs. 37,99,000/-' },
    { name: 'Neta X', price: 'Rs. 52,00,000/-' },
    
    
  ];

  
  return (
     <>
     <div className="price-list-four">
       
      <h2>NETA EV Models</h2>
      <br></br>
      <table className="pricelist-four-table">
        <thead>
          <tr>
            <th>NETA EV Cars</th>
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

export default PriceListfour
