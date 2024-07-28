import React from 'react'
import './PriceListseven.css'
const PriceListseven = () => {
     const products = [
    { name: 'Nissan Leaf', price: 'Rs. 64,99,000/-' },
    
  ];

  return (
   <>
   <div className="price-list-seven">
       
      <h2>Nissan EV Models</h2>
      <br></br>
      <table className="pricelist-seven-table">
        <thead>
          <tr>
            <th>Nissan EV Cars</th>
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

export default PriceListseven
