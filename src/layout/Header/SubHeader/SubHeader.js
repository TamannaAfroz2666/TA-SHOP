import React from 'react';
import './SubHeader.css';
import { BsBasket } from "react-icons/bs";

const SubHeader = () => {
    return (
        <div>
              <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <BsBasket color='tomato' size={20} />
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel" className='cart-title'>shopping cart (3)</h5>
                    <button type="button" className="btn-close text-reset  " data-bs-dismiss="offcanvas" aria-label="Close" id='btnClose'>
                       
                    </button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
            
        </div>
    );
};

export default SubHeader;