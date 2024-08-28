import React from 'react'
import './PriceListthree.css'
const PriceListthree = () => {
     const products = [
    
       { name : 'BYD Atto 3 Advance', price : 'Rs. 55,99,000/-' },
       { name : 'BYD Atto 3 Superior', price : 'Rs. 65,88,000/-' },
       { name : '', price : '' },
       { name : 'BYD All New e6', price : 'Rs. 59,00,000/-' },
       { name : '', price : '' },
       { name : 'BYD Dolphin', price : 'Rs. 39,80,000/-' },
       { name : '', price : '' },
       { name : 'BYD Seal Dynamic', price : 'Rs. 1,05,00,000/-' },
       { name : 'BYD Seal Performance', price : 'Rs. 1,85,00,000/-' },
       { name : 'BYD Seal Premium', price : 'Rs. 1,39,00,000/-' },
     
  ];
  return (
     <>
     <div className="price-list-three">
     
      <h2 className='carmodelthree'>BYD EV Models</h2>
      <br></br>
      <table className="pricelist-three-table">
        <thead>
          <tr>
            <th>BYD EV Cars</th>
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

export default PriceListthree
