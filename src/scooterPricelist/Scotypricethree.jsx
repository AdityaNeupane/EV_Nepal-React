import React from 'react'
import './Scotypricethree.css'
const Scotypricethree = () => {
  const products = [
{ name: '    ', price: 'Rs.     ' },
{ name: '    ', price: 'Rs.     ' },

];

  return (
    <>
    <div className="threescoty">
     
      <h2 className='scotymodelthree'> NIU Models</h2>
      <br></br>
      <table className="threescoty-table">
        <thead>
          <tr>
            <th>NIU Scooter's</th>
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

export default Scotypricethree
