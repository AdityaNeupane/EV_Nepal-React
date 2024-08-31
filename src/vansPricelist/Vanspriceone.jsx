import React from 'react'
import './Vanspriceone.css'
const Vanspriceone = () => {

const products = [
  {name: 'Passenger Van EV', price: 'Rs. 56,50,000/-'},
  {name: 'High roof Van ', price: 'Rs. 57,00,000/-'},
  {name: 'Cargo Van EV', price: 'Rs. 47,00,000/-'},
  {name: 'TM1 EV', price: 'Rs. 33,99,000/-'},
];
  return (
     <>
     <div className='onevan'>
     <h1 className='vanmodelone'>Foton Models</h1>
      <br></br>
      <table className='onevan-table'>
        <thead>
          <tr>
            <th>Foton EV Van's</th>
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

export default Vanspriceone
