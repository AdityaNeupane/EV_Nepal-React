import React from 'react'
import './PriceListtwelve.css'
const PriceListtwelve = () => {
     const products = [
    { name: 'Deepal S07', price: 'Rs. 74,00,000/-' },
    
  ];

  return (
     <>
     <div className="price-list-twelve">
       
      <h2>Deepal EV Models</h2>
      <br></br>
      <table className="pricelist-twelve-table">
        <thead>
          <tr>
            <th>Deepal EV Cars</th>
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

export default PriceListtwelve
