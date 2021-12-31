import React, { useState } from 'react';
import './Product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  
  
//   Making getTotal func a PURE function
function getTotal(total) {
    return total.toLocaleString(undefined, currencyOptions)
  }

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

//   function getTotal() {
//     return total.toLocaleString(undefined, currencyOptions)
//   }


function add() {
    setCart(['ice cream']);
    setTotal(5);
  }
  
  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(total)}</div>
      {/* <div>Total: { getTotal() }</div> */}
      {/* <div>Total: {total}</div> */}

      <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
      <button onClick={add}>Add</button> 
      {/* <button>Remove</button> */}
      <button
        onClick={() => {
          setCart([]);
          setTotal(0);
        }}
      >
        Remove
      </button>
    </div>
  )
}