import React, { useReducer } from 'react';
import './Product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }


const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

  
//   Making getTotal func a PURE function
function getTotal(total) {
    return total.toLocaleString(undefined, currencyOptions)
  }


function cartReducer(state, product) {
    return [...state, product]
  }

  function totalReducer(state, action) {
    if(action.type === 'add') {
      return state + action.price;
    }
    return state - action.price
  }
  

export default function Product() {
//   const [cart, setCart] = useState([]);
  const [cart, setCart] = useReducer(cartReducer, []);
  // const [total, setTotal] = useState(0);
  const [total, setTotal] = useReducer(totalReducer, 0);

//   function getTotal() {
//     return total.toLocaleString(undefined, currencyOptions)
//   }


// function add() {
//     setCart(['ice cream']);
//     setTotal(5);
//   }

function add(product) {
    // setCart(product.name);
    // // setCart(current => [...current, product.name]);
    // setTotal(current => current + product.price);
    const { name, price } = product;
    setCart(name);
    setTotal({ price, type: 'add' });
  }
  
  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(total)}</div>
      {/* <div>Total: { getTotal() }</div> */}
      {/* <div>Total: {total}</div> */}

      <div className="product">
      {products.map(product => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>
            <button onClick={() => add(product)}>Add</button>            
            <button>Remove</button>
          </div>
        ))}
      </div>
      
      {/* <button onClick={add}>Add</button>  */}
      {/* <button>Remove</button> */}
      {/* <button
        onClick={() => {
          setCart([]);
          setTotal(0);
        }}
      >
        Remove
      </button> */}
    </div>
  )
}