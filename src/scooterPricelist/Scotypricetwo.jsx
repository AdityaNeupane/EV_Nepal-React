import React from 'react'
import './Scotypricetwo.css'
const Scotypricetwo = () => {
  const products = [
{ name: '    ', price: 'Rs.     ' },
{ name: '    ', price: 'Rs.     ' },

];

  return (
     <>
     <div className="twoscoty">
     
      <h2 className='scotymodeltwo'> Ecobit Models</h2>
      <br></br>
      <table className="twoscoty-table">
        <thead>
          <tr>
            <th>Ecobit Scooter's</th>
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

export default Scotypricetwo
