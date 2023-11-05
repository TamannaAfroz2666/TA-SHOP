import React from 'react';
import './NewArrivals.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewArrivals = () => {
    const dressHandle = () => {
        console.log('dress are here');
    }
    const accessHanle = () => {
        console.log('all needs are ready');
    }
    const shoeHandle = () => {
        console.log('shoes here');
    }
    return (
        <div className='newArrivals'>
            <div className="arrivalsContent">
                <div className="multiPro">
                    <div className="dressContent">
                    <Link to='dress-store'>
                        <motion.button
                            whileHover={{
                                scale: 1.1
                            }}

                            className='dressBtn'
                            onClick={dressHandle}
                        >Dress</motion.button>
                        </Link>
                    </div>
                    <div className="multiCon">
                       
                            <div className="parse">
                                <Link to='accessories-store'>
                                    <motion.button
                                        className='accessBtn'
                                        whileHover={{ scale: 1.1 }}
                                        onClick={accessHanle}
                                    >
                                        Accessories
                                    </motion.button>
                                </Link>

                            </div>
                        




                        <div className="shoes">
                        <Link to='shoes-store'>
                            <motion.button
                                className='shoesBtn'
                                onCanPlay={shoeHandle}
                                whileHover={{ scale: 1.1 }}
                            >
                                Shoes
                            </motion.button>
                            </Link>


                        </div>

                    </div>

                </div>
                <div className="singlePro">
                    <div className="singleImg">
                        <h5 className='arrivalsTitle'>new arrivals</h5>
                        <h3 className='blondesTitle'>blondes <br /> with minimalist</h3>
                        <div className="shopColl">
                            <Link to='/shop-collection' className='shopCollection'>Shop Collection

                                <span className='hh'><hr className='shopCollectionHr' /></span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NewArrivals;