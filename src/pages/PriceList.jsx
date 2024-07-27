import React from 'react'
import './PriceList.css'
const PriceList = () => {

     const brands = [
    {
      brand: 'Brand A',
      products: [
        { name: 'Product 1A', price: '$100' },
        { name: 'Product 2A', price: '$200' },
        { name: 'Product 3A', price: '$300' },
        { name: 'Product 4A', price: '$400' },
        { name: 'Product 5A', price: '$500' },
      ],
    },
    {
      brand: 'Brand B',
      products: [
        { name: 'Product 1B', price: '$150' },
        { name: 'Product 2B', price: '$250' },
        { name: 'Product 3B', price: '$350' },
        { name: 'Product 4B', price: '$450' },
      ],
    },
  ];

  return (
     <>
     <div className='price-list'>
      <h2>Pricelist</h2>
       
         {brands.map((brand, index) => (
        <div key={index} className="brand-section">
          <h3>{brand.brand}</h3>
          <table className="pricelist-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {brand.products.map((product, idx) => (
                <tr key={idx}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

     </div>
     </>
  )
}

export default PriceList
