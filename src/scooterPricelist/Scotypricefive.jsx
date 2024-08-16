import React from 'react'
import './Scotypricefive.css'
const Scotypricefive = () => {
  const products = [
{ name: '    ', price: 'Rs.     ' },
{ name: '    ', price: 'Rs.     ' },

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
