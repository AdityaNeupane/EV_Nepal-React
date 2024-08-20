import React from 'react'
 import './Bikepriceone.css'
const Bikepriceone = () => {
const products = [
{ name: 'Yatri Project One (P-1)    ', price: 'Rs.5,65,000 /-     ' },
{ name: 'Yatri Project Zero (P-O)   ', price: 'Rs.19,49,000 /-     ' },

];
  return (
    <>
    <div className="onebike">
     <h1 className='Main-heading'>' Price List of Electric Bikes Available in Nepal '</h1>
     <br></br>
     <h1 className='bike-heading'>Electric Bike's</h1>
      <h2 className='bikemodel'> Yatri Models</h2>
      <br></br>
      <table className="onebike-table">
        <thead>
          <tr>
            <th>Yatri Bike's</th>
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

export default Bikepriceone
