import React from 'react'
import './PriceListsix.css'
const PriceListsix = () => {
     const products = [
    { name: 'MG ZS EV Comfort', price: 'Rs. 48,49,000/-' },
    { name: 'MG ZS EV Deluxe', price: 'Rs. 52,99,000/-' },
    { name: '', price: '' },
    { name: 'MG4 EV Comfort', price: 'Rs. 41,49,000/-' },
    { name: 'MG4 EV Luxury', price: 'Rs. 58,99,000/-' },
    { name: '', price: '' },
    { name: 'MG Comet Pace', price: 'Rs. 17,99,000/-' },
    { name: 'MG Comet Play', price: 'Rs. 20,99,000/-' },
     ];
     return (
     <>
     <div className="price-list-six">
       
      <h2>MG EV Models</h2>
      <br></br>
      <table className="pricelist-six-table">
        <thead>
          <tr>
            <th>MG EV Cars</th>
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

export default PriceListsix
