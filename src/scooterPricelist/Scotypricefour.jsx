import React from 'react'
import './Scotypricefour.css'
const Scotypricefour = () => {
  const products = [
{ name: '    ', price: 'Rs.     ' },
{ name: '    ', price: 'Rs.     ' },

];

  return (
     <>
     <div className="fourscoty">
     
      <h2 className='scotymodelfour'> Segway Models</h2>
      <br></br>
      <table className="fourscoty-table">
        <thead>
          <tr>
            <th>Segway Scooter's</th>
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

export default Scotypricefour
