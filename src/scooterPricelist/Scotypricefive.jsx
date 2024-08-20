import React from 'react'
import './Scotypricefive.css'
const Scotypricefive = () => {
  const products = [
{ name: 'Super Soco CU Mini    ', price: 'Rs.1,89,000 /-     ' },
{ name: 'Super Soco CUx (Standard color)    ', price: 'Rs.2,69,000 /-     ' },
{ name: 'Super Soco CUx (Luxury color)    ', price: 'Rs.2,79,900 /-     ' },
{ name: 'Super Soco CPx (Single Battery)    ', price: 'Rs.4,79,000 /-     ' },
{ name: 'Super Soco CPx (Dual Battery)    ', price: 'Rs.5,99,900 /-     ' },

];

  return (
    <>
    <div className="fivescoty">
     
      <h2 className='scotymodelfive'> Super Soco Models</h2>
      <br></br>
      <table className="fivescoty-table">
        <thead>
          <tr>
            <th>Super Soco Scooter's</th>
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

export default Scotypricefive
