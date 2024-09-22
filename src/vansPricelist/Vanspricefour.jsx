import React from 'react'
import './Vanspricefour.css'
const Vanspricefour = () => {

  const products = [
  {name: 'EC 36 (11-seater)', price: 'Rs. 45,50,000/-'},
   
];
  return (
     <>
     
      <div className='fourvan'>
        
    <h1 className='vanmodelfour'>Sokon Models</h1>
    <br/><br/>
    <table className='fourvan-table'>
      <thead>
        <tr>
          <th>Sokon EV Van's</th>
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

export default Vanspricefour
