import React from 'react'
import './Vanspricesix.css'
const Vanspricesix = () => {

  const products = [
  {name: 'Passenger Van 11-seater', price: 'Rs. 45,50,000/-'},
 
];
  return (
     <>
     
     <div className='sixvan'>
      
    <h1 className='vanmodelsix'>Wuling Models</h1>
    <br/><br/>
    <table className='sixvan-table'>
      <thead>
        <tr>
          <th>Wuling EV Van's</th>
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

export default Vanspricesix
