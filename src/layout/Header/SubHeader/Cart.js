import React from 'react';

const Cart = ({ cartData, closeOffCanvas }) => {
    return (
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Shopping Cart</h5>
          <button type="button" className="btn-close text-reset" onClick={closeOffCanvas} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {cartData.map(item => (
            <div key={item.id}>
              <p>{item.p_title}</p>
              <p>Quantity: {item.quantity}</p>
              {/* Add other information you want to display */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cart;