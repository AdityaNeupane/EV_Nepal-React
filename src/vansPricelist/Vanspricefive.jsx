import React from 'react'
import './Vanspricefive.css'
const Vanspricefive = () => {

  const products = [
  {name: 'SRM EV van (11-seater)', price: 'Rs. 45,50,000/-'},
 
];
  return (
     <>
     
      <div className='fivevan'>
    <h1 className='vanmodelfive'>SRM Models</h1>
    <br/><br/>
    <table className='fivevan-table'>
      <thead>
        <tr>
          <th>SRM EV Van's</th>
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

export default Vanspricefive
