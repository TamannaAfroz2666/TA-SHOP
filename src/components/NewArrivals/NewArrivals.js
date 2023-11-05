import React from 'react';
import './NewArrivals.css';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    return (
        <div className='newArrivals'>
            <div className="arrivalsContent">
                <div className="multiPro">
                    <div className="dressContent">
                        <button>Dress</button>
                    </div>
                    <div className="multiCon">
                        <div className="parse">
                            <button>Accesories</button>

                        </div>
                        <div className="shoes">
                            <button>Shoes</button>

                        </div>
                    </div>

                </div>
                <div className="singlePro">
                    <div className="singleImg">
                        <h5 className='arrivalsTitle'>new arrivals</h5>
                        <h3>blondes with minimalist</h3>
                        <div className="shopColl">
                            <Link>Shop Collection</Link>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default NewArrivals;