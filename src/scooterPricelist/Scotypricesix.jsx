import React from 'react'
import './Scotypricesix.css'
const Scotypricesix = () => {
  const products = [
{ name: 'Yadea E8S Pro    ', price: 'Rs.2,30,000 /-     ' },
{ name: 'Yadea G6    ', price: 'Rs.2,60,000 /-     ' },
{ name: 'Yadea G1S    ', price: 'Rs.3,70,000 /-     ' },
{ name: 'Yadea G5    ', price: 'Rs.3,50,000 /-     ' },
{ name: 'Yadea S-bike    ', price: 'Rs.2,55,000 /-     ' },
{ name: 'Yadea M6    ', price: 'Rs.1,75,000 /-     ' },

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
