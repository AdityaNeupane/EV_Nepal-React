import React from 'react'
import './PriceListeight.css'
const PriceListeight = () => {

     const products = [
    { name: 'Mahindra XUV 400 EV EL Pro', price: 'Rs. 52,50,000 /- ' },
    { name: '', price: '' },
    { name: 'Mahindra E20 ', price: 'Rs. 22,65,000 /-' },
    
  ];
  
  return (
     <>
     <div className="price-list-eight">
     
      <h2 className='carmodeleight'>Mahindra EV Models</h2>
      <br></br>
      <table className="pricelist-eight-table">
        <thead>
          <tr>
            <th>Mahindra EV Cars</th>
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

export default PriceListeight