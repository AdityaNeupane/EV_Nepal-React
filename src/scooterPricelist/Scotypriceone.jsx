import React from 'react'
import './Scotypriceone.css'
const Scotypriceone = () => {
  const products = [
{ name: 'Ather 450X (2.9 kwh battery)', price: 'Rs.3,99,999 /-' },
{ name: 'Ather 450X (3.7 kwh battery)', price: 'Rs.4,39,999 /-' },
{ name: 'Ather 450S (2.9 kwh battery)', price: 'Rs.3,50,000 /-' },
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
