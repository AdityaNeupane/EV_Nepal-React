import React from 'react'
import './PriceListnine.css'
const PriceListnine = () => {
     const products = [
    { name: 'GAC Aion Y', price: 'Rs. 54,99,000/-' },
    
  ];
  
  return (
    <>
    <div className="price-list-nine">
       
      <h2>GAC EV Models</h2>
      <br></br>
      <table className="pricelist-nine-table">
        <thead>
          <tr>
            <th>GAC EV Cars</th>
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

export default PriceListnine
