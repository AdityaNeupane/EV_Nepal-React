import React from 'react'
import './PriceListfive.css'
const PriceListfive = () => {
 const products = [
    { name: 'Tesla Model Y Long Range', price: 'Rs. 1,65,00,000/- ' },
    { name: 'Tesla Model Y [Performance Model', price: 'Rs. 1,95,00,000/- ' },
    { name: '', price: '' },
    { name: 'Tesla Model X Long Range', price: 'Rs. 2,45,00,000/- ' },
    { name: 'Tesla Model X Ludicrous Model', price: 'Rs. 2,85,00,000/- ' },
    { name: '', price: '' },
    { name: 'Tesla Model 3 Long Range AWD', price: 'Rs. 1,67,00,000/- ' },
    { name: 'Tesla Model 3 Standard Model', price: 'Rs. 1,25,00,000/- ' },
  ];

  return (
     <>
     <div className="price-list-five">
     
      <h2 className='carmodelfive'>Tesla EV Models</h2>
      <br></br>
      <table className="pricelist-five-table">
        <thead>
        <tr>
            <th>Tesla Models</th>
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

export default PriceListfive
