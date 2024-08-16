import React from 'react'
import './Bikepricetwo.css'
const Bikepricetwo = () => {

 
const products = [
{ name: '    ', price: 'Rs.     ' },
{ name: '    ', price: 'Rs.     ' },

];
  return (
    <>
     <div className="twobike">
     
      <h2 className='bikemodeltwo'> Super Soco Models</h2>
      <br></br>
      <table className="twobike-table">
        <thead>
          <tr>
            <th>Super Soco Bike's</th>
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

export default Bikepricetwo
