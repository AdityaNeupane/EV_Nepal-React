import React from 'react'
import './Scotypricesix.css'
const Scotypricesix = () => {
  const products = [
{ name: '    ', price: 'Rs.     ' },
{ name: '    ', price: 'Rs.     ' },

];

  return (
     <>
     <div className="sixscoty">
     
      <h2 className='scotymodelsix'> Yadea Models</h2>
      <br></br>
      <table className="sixscoty-table">
        <thead>
          <tr>
            <th>Yadea Scooter's</th>
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

export default Scotypricesix
