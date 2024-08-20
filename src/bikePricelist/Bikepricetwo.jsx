import React from 'react'
import './Bikepricetwo.css'
const Bikepricetwo = () => {

 
const products = [
{ name: 'Super Soco TC (Single Battery)    ', price: 'Rs.2,95,900 /-     ' },
{ name: 'Super Soco TC (Dual Battery)    ', price: 'Rs.3,89,900 /-     ' },
{ name: 'Super Soco TS Street Hunter (Single Battery)    ', price: 'Rs.3,79,900 /-     ' },
{ name: 'Super Soco TS Street Hunter (Dual Battery)    ', price: 'Rs.4,79,900 /-     ' },
{ name: 'Super Soco TC Wanderer (Single Battery)    ', price: 'Rs.3,89,900 /-     ' },
{ name: 'Super Soco TC Wanderer (Dual Battery)    ', price: 'Rs.4,89,900 /-     ' },
{ name: 'Super Soco TC Max    ', price: 'Rs.4,89,900 /-     ' },

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
