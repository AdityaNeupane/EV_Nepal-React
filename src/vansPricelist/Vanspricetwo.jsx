import React from 'react'
import './Vanspricetwo.css'
const Vanspricetwo = () => {

  const products = [
  {name: '14-seater micro vans', price: 'Rs. 56,50,000/-'},
 
];
  return (
     <>
     
      <div className='twovan'>
    <h1 className='vanmodeltwo'>KingLong Models</h1>
    <br/><br/>
    <table className='twovan-table'>
      <thead>
        <tr>
          <th>KingLong EV Van's</th>
          <th>Price (in Rupees)</th>
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

export default Vanspricetwo
