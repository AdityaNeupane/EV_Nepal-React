import React from 'react'
import './PriceListeleven.css'
const PriceListeleven = () => {

     const products = [
    { name: 'ORA 03 ev', price: 'Rs. 47,49,000/-' },
   
  ];

  return (
    <>
    <div className="price-list-eleven">
       
      <h2>GWM EV Models</h2>
      <br></br>
      <table className="pricelist-eleven-table">
        <thead>
          <tr>
            <th>GWM EV Cars</th>
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

export default PriceListeleven
