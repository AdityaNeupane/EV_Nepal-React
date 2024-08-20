import React from 'react'
import './Scotypricethree.css'
const Scotypricethree = () => {
  const products = [
{ name: 'NIU MQi Sport', price: 'Rs.2,76,000 /-' },
{ name: 'NIU UQi GT', price: 'Rs.2,76,000 /-' },
{ name: 'NIU Gova G3', price: 'Rs.2,77,000 /-' },
{ name: 'NIU NQI Sport (Gloss)', price: 'Rs.3,48,000 /-' },
{ name: 'NIU NQI Sport (Matte)', price: 'Rs.3,53,000 /- ' },
{ name: 'NIU MQi GT', price: 'Rs.4,85,000 /- ' },
{ name: 'NIU NQi GT', price: 'Rs.4,95,000 /-' },
];

  return (
    <>
    <div className="threescoty">
     
      <h2 className='scotymodelthree'> NIU Models</h2>
      <br></br>
      <table className="threescoty-table">
        <thead>
          <tr>
            <th>NIU Scooter's</th>
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

export default Scotypricethree
