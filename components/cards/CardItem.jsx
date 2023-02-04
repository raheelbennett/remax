import React from 'react'
import Cards from 'react-credit-cards';

const CardItem = (card) => {


  return (
    <div>       
      
 <Cards
    cvc="123"
    expiry="12/25"
    focused="number"
    name="light house labs"
    number="1234567890123456"
  />
  
  
  </div>
  )
}

export default CardItem