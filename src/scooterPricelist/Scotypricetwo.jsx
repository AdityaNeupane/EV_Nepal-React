import React from 'react'
import './Scotypricetwo.css'
const Scotypricetwo = () => {
  const products = [
{ name: 'Ecobit R3', price: 'Rs.3,59,000 /-' },
{ name: 'Ecobit R3 pro (Dual battery)', price: 'Rs.5,09,000 /-' },
{ name: 'Ecobit R3 pro (Single battery)', price: 'Rs.4,09,000 /-' },
{ name: 'Ecobit Vax', price: 'Rs.1,80,000 /-' },
{ name: 'E-retro star (Dual battery)', price: 'Rs.3,13,000 /-' },
{ name: 'E-retro star (Single battery)', price: 'Rs.2,04,000 /-' },
{ name: 'Kids Bike 1.0', price: 'Rs.1,55,000 /-'},

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
