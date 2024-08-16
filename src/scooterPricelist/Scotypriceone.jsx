import React from 'react'
import './Scotypriceone.css'
const Scotypriceone = () => {
  const products = [
{ name: '    ', price: 'Rs.     ' },
{ name: '    ', price: 'Rs.     ' },

];

  return (
    <>
    <div className="onescoty">
     
      <h2 className='scotymodelone'> Ather Models</h2>
      <br></br>
      <table className="onescoty-table">
        <thead>
          <tr>
            <th>Ather Scooter's</th>
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

export default Scotypriceone
