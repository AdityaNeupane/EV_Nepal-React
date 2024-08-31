import React from 'react'
import './Vanspricethree.css'
const Vanspricethree = () => {

  const products = [
  {name: 'KYC VD5', price: 'Rs. 45,50,000/-'},
  {name: 'Changan V5', price: 'Rs. 45,50,000/-'},
 
];
  return (
     <>
     
      <div className='threevan'>
    <h1 className='vanmodelthree'>KYC Models</h1>
    <br/><br/>
    <table className='threevan-table'>
      <thead>
        <tr>
          <th>KYC EV Van's</th>
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

export default Vanspricethree
