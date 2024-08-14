import React from 'react'
import './PriceListone.css'
 

     const PriceListone = () => {
      
      
      const products = [
        
        { name: 'Tata Tiago EV MR XE', price: 'Rs. 21,99,000/-' },
        { name: 'Tata Tiago EV MR XT', price: 'Rs. 22,99,000/-' },
        { name: 'Tata Tiago EV LR XT', price: 'Rs. 24,49,000/-' },
        { name: 'Tata Tiago EV LR XZ+', price: 'Rs. 26,99,000/-' },
        { name: 'Tata Tiago EV LR XZ+ Tech Lux', price: 'Rs. 27,99,000/-' },
        { name: '', price: '' },      
        { name: 'Tata Nexon XM', price: 'Rs. 38,99,000/-' },
        { name: 'Tata Nexon XZ+', price: 'Rs. 40,99,000/-' },
        { name: 'Tata Nexon XZ + Lux', price: 'Rs. 42,99,000/-' },
        { name: 'Tata Nexon XZ + Lux Dark', price: 'Rs. 48,99,000/-' },
        { name: 'Tata Nexon EV MAX XZ + Lux ', price: 'Rs. 46,49,000/-' },
        { name: '', price: '' },   
        { name: 'Tata Tigor', price: 'Rs. 29,99,000/- ' },
        { name: 'Tata Tigor', price: 'Rs. 32,50,000/- ' },
        { name: 'Tata Tigor', price: 'Rs. 34,00,000/- ' },
        { name: 'Tata Tigor', price: 'Rs. 33,49,000/- ' },
        { name: '', price: '' },
        { name: 'Tata Xprest-T', price: 'Rs. 36,99,000/-' },


      ];
    
    


  return (
     <>
     <div className='price-list'>
        <h1 className='pricelist-heading'>' Price List of Electric Vehicles Available in Nepal '</h1>
        <br></br>
        <h1 className='vehicle-heading'>' Electric Cars '</h1>
      <h2 className='h2'>Tata EV Models</h2>
       <br></br>
         
          <table className="pricelist-table">
            <thead>
              <tr>
                <th>Tata EV Cars</th>
                <th>Price ( in Rupees )</th>
              </tr>

             

            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={idx}>
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

export default PriceListone
