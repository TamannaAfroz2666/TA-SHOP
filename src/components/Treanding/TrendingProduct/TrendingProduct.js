import React, { useEffect, useState } from 'react';
import './TrendingProduct.css';
// import img1 from '../../../assets/Image/NewArrivals/pic20.jpg';
import { AiOutlineHeart,  AiFillStar } from "react-icons/ai";
import { HiArrowsUpDown } from "react-icons/hi2";
// import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, spring } from 'framer-motion';
// import { Link } from 'react-router-dom';
import data from '../../../Utilities/API/trendingProduct.json';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { FiMinus } from "react-icons/fi";
// import { GoPlus } from "react-icons/go";
// import { IoBagHandleSharp } from "react-icons/io5";
import AddToCard from './AddToCard/AddToCard';
import QuickView from './ModalCompare/QuickView/QuickView';



const TrendingProduct = () => {
   

    // console.log('data is', productsInfo);
    const [showCard, setShowCard] = useState(false);


    // const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const compareHandle = () => {
        console.log('here is compare');
        setShow(true);

    }
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];

    const selectHandle = () => {
        console.log('event call');
    }


    // Quickview area 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedColor, setSelectedColor] = useState('');

    // color work 

    const [productsInfo, setProductsInfo] = useState(data.product);
    const findProductById = (productId) => {
        return productsInfo.find(product => product.id === productId);
    };

    const findProductByIdAndColor = (productId, colorCode) => {
        const product = findProductById(productId);
        console.log('product is ', product);
        if (product) {
            const foundColor = product.color.find(color => color.color_code === colorCode);
            console.log('find color', foundColor);
            if (foundColor) {
                let imageId = 'product_id_' + productId;
                document.getElementById(imageId).src = foundColor.image;
                return { product, foundColor };
            }
        }

        return null; // If the product or color isn't found
    };
    //   add to carrd area 
 
    // wishlist 1,2,3 
    // 3
    var wishlist = JSON.parse(localStorage.getItem('wishlistData') || '[]');
    function isItemInWishlist(item) {
        
        // for (var i=0; i<wishlist.length; i++){
        //     console.log("id = ", wishlist[i].id)
        //     if (item.id === wishlist[i].id){
        //         return true
        //         //return wishlist
        //     }
        //     else{
        //         return false
        //         //return 
        //     }
        // }
        return wishlist.find(wishlistItem => wishlistItem.id === item.id);
    }
      
    function ProductAddWishList(itemData) {
        
        var isDuplicate = isItemInWishlist(itemData)
        console.log("isDuplicate = ", isDuplicate)
        if (!isDuplicate) {
          wishlist.push(itemData);
          localStorage.setItem('wishlistData', JSON.stringify(wishlist));
        } else {
            alert('Item with the same ID already exists in the wishlist.')
        }
    }
    return (
        <div className='trendingProduct'>
            <div className="productBox">
                {
                    productsInfo.slice(0, 8).map((product) => {
                        return (
                            <div className="productContainer">
                                <div className="productContents">
                                    <a href={"/product/" + product.slug_field}>
                                        <img src={product.default_image} alt="" className='image' id={`product_id_${product.id
                                            }`} />
                                    </a>
                                    {/* over lay area  */}
                                    <div className="overlaySection">
                                        <div className="iconSection">
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.2,
                                                }}
                                                className="heart"
                                            >
                                                <p className='wishlist'>wishlist</p>
                                                <AiOutlineHeart 
                                                onClick={() => ProductAddWishList(product)}
                                                className='IconOverlay' color='black' size={35} />

                                            </motion.div>
                                            {/* compare  */}
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.2,
                                                }}
                                                className="arrow">
                                                <p className='compare'>compare</p>
                                                <button className='btnCover'
                                                    onClick={compareHandle}
                                                >
                                                    <HiArrowsUpDown className='IconOverlay' size={35} />

                                                </button>
                                               

                                            </motion.div>
                                            {/* quick view  */}
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.2,
                                                }}
                                                className="eye">
                                                <p className='quickView'>quickView</p>
                                                <QuickView 
                                                ProductsData={product}
                                                />
                                            </motion.div>
                                        </div>
                                        {/* select option area start */}
                                        <motion.div className="selectOption"
                                            transition={{
                                                duration: .5,
                                                type: spring
                                            }}
                                            layout
                                            onClick={() => setShowCard(!showCard)}
                                        >{/* select option area start  */}
                                            <div className="vhSelect">
                                                <AddToCard
                                                    products_data={product}
                                                    product_id={product.id}
                                                    product_name={product.p_title}
                                                    product_slug={product.slug_field}
                                                    product_p_price={product.p_price}
                                                ></AddToCard>
                                            </div>
                                        </motion.div>
                                        {/* select option area end  */}
                                    </div>
                                </div>
                                <div className="productInfoTrend">
                                    <div className="iconsFieldTr">
                                        <div className="iconsRating">
                                            <span className='hhh'><AiFillStar size={15} color='orange' /></span>
                                            <span><AiFillStar size={15} color='orange' /></span>
                                            <span><AiFillStar size={15} color='orange' /></span>
                                            <span><AiFillStar size={15} color='orange' /></span>
                                            <span><AiFillStar size={15} color='orange' /></span>
                                        </div>
                                        <div className="numProduct">
                                            <p className='oneItem'>({product.stok_product})</p>
                                        </div>
                                    </div>
                                    <div className="nameProduct">
                                        <h3 className='product_titlesTr'>{product.p_title}</h3>
                                    </div>
                                    <div className="priceSection">
                                        <div className="pp">
                                            <p className='priceSubInfo'> ${product.doller_convert}</p>
                                            <p className='priceTitle'>Tk {product.p_price}</p>
                                        </div>
                                    </div>
                                    <div className="colorSection">
                                        <div className="sectionColor">
                                            {
                                                product.color.map((product_color) => {
                                                    return (
                                                        <label className="colorField">
                                                            <input
                                                                type="radio"
                                                                name="color"
                                                                value={product_color.color_code}
                                                                onChange={() => findProductByIdAndColor(product.id, product_color.color_code)}
                                                            />
                                                            <span
                                                                style={{ backgroundColor: product_color.color_code }}
                                                                className="radio-mark"
                                                            ></span>
                                                        </label>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TrendingProduct;