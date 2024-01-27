// SubHeader.js
import './SubHeader.css';
import { IoBagHandleSharp } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BsBasket } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import Offcanvas from 'react-bootstrap/Offcanvas';
import AddToCartPage from '../../../Page/TrendingProduct/AddToCartPage';
import CartGiftWarp from '../../../Page/TrendingProduct/CartGiftWarp/CartGiftWarp';
import { AiOutlineEdit, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import img1 from '../../../../src/assets/Image/NewArrivals/pic20.jpg'
import { Item } from 'semantic-ui-react';

function SubHeader({ products_data, quantity, product_section }) {
    var [getCartData, setCartData] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        if (product_section) {
            addToCardTreand(products_data);
        }
    };


    // Function to calculate the total quantity of all products in the cart
    const calculateTotalQuantity = () => {
        getCartData = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalQuantityData = getCartData.reduce((total, item) => total + item.quantity, 0);
        return totalQuantityData;
    };

    const calculateSubTotalPrice = () => {
        getCartData = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalPriceData = getCartData.reduce((total, item) => total + item.total_price, 0);
        return totalPriceData;
    };

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPriceData] = useState(0);

    useEffect(() => {
        const totalQuantityData = calculateTotalQuantity();
        setTotalQuantity(totalQuantityData);
        document.getElementById("Total_Quantity").innerHTML = totalQuantityData;
        const totalPriceData = calculateSubTotalPrice()
        setTotalPriceData(totalPriceData)

    }, []);



    // Function to remove an item from the cart
    const removeFromCart = (productId) => {
        const updatedCart = getCartData.filter(item => item.id !== productId);
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };


    function isItemInCartlist(item) {
        var cartData = JSON.parse(localStorage.getItem('cart') || '[]');
        const DataFound = cartData.find(cartDataItem => cartDataItem.id === item.id);
        return DataFound;
    }

    const addToCardTreand = (productInformation) => {
        var cartData = JSON.parse(localStorage.getItem('cart') || '[]');
        console.log('productInformation = ', productInformation);
        let getProductID = productInformation.products_data.id;
        console.log('getProductID = ', getProductID);

        var isDuplicate = isItemInCartlist(productInformation.products_data)

        console.log("isDuplicate = ", isDuplicate)


        if (!isDuplicate) {
            // Extract numeric price from the product information and remove commas
            let numericPrice = parseFloat(productInformation.products_data.p_price.replace(/,/g, ''));
            // Create a new cart item with updated total price and quantity
            var newCartList = [
                {
                    ...productInformation.products_data,
                    total_price: numericPrice * quantity,
                    quantity: quantity,
                }
            ]
            // Assuming cartData is the existing cart items array in your component's state
            // Merge existing cart items with the new cart item
            const mergedWishlist = [...cartData, ...newCartList];
            // Update the local storage with the merged cart items
            localStorage.setItem('cart', JSON.stringify(mergedWishlist));
            // Update the state with the merged cart items
            setCartData(mergedWishlist)

            // Calculate and update the total quantity
            const totalQuantityData = calculateTotalQuantity();
            setTotalQuantity(totalQuantityData);

            // calculate and update price total 
            const totalSubPrice = calculateSubTotalPrice();
            setTotalPriceData(totalSubPrice);
            // Update the Total Quantity displayed in the HTML
            document.getElementById("Total_Quantity").innerHTML = totalQuantityData;

        }
        else {
            // Product is already in the cart, update its quantity
            var updatedCart = cartData.map(item => {
                // Check if the current item in the cart matches the product ID
                if (item.id === getProductID) {
                    // Extract numeric price from the item's price and remove commas
                    let numericPrice = parseFloat(item.p_price.replace(/,/g, ''));
                    // Update the item with the new quantity and total price
                    return {
                        ...item,
                        total_price: numericPrice * (quantity + 1),
                        quantity: quantity,
                    };
                }
                return item;
            });
            // Update the component's state with the updated cart
            setCartData(updatedCart)
            // Update local storage with the updated cart
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            // Recalculate and update the total quantity

            const totalQuantityData = calculateTotalQuantity();
            setTotalQuantity(totalQuantityData);
            // Update the Total Quantity displayed in the HTML
            document.getElementById("Total_Quantity").innerHTML = totalQuantityData;
        }
    }

    const [count, setCount] = useState(1);
    // decreses value of cart 
    const lowValue = (product_id) => {
        var cartData = JSON.parse(localStorage.getItem('cart') || '[]');
        // Update the cart: decrease quantity and adjust total price if quantity is greater than 1.
        var updatedCart = cartData.map(item => {
            if (item.id === product_id && item.quantity > 1) {
                let numericPrice = parseFloat(item.p_price.replace(/,/g, ''));
                return {
                    ...item,
                    total_price: numericPrice * (item.quantity - 1),
                    quantity: item.quantity - 1,
                };

            }
            return item;
        });
        setCartData(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        const totalQuantityData = calculateTotalQuantity();
        setTotalQuantity(totalQuantityData);
        document.getElementById("Total_Quantity").innerHTML = totalQuantityData;
    }

    // increses value of cart 
    const highValue = (product_id) => {
        console.log("product_id = ", product_id);

        var cartData = JSON.parse(localStorage.getItem('cart') || '[]');
        var updatedCart = cartData.map(item => {


            if (item.id === product_id) {
                // Extract numeric price from the product information and remove commas
                let numericPrice = parseFloat(item.p_price.replace(/,/g, ''));
                console.log('numericPrice = ', numericPrice);

                var total_price = numericPrice * (item.quantity + 1)
                return {
                    ...item,
                    total_price: total_price,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
        setCartData(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        const totalQuantityData = calculateTotalQuantity();
        setTotalQuantity(totalQuantityData);
        document.getElementById("Total_Quantity").innerHTML = totalQuantityData;
    }


    return (
        <>
            {product_section ? (
                <button onClick={handleShow} className='card-btn-cls' type="button">
                    <IoBagHandleSharp size={18} />
                    <span className='cart-icon'>add to cart</span>
                </button>
            ) : (

                <button onClick={handleShow} className='card-btn-cls' type="button">
                    <span className='init' id="Total_Quantity">{totalQuantity}</span>
                    <BsBasket size={20} className='cartIconsub' />
                </button>
            )}


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h5 id="offcanvasRightLabel" className='cart-title'>shopping cart ({calculateTotalQuantity()})</h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='add-to-cart-page'>
                        <div className="productListCart">
                            <div className="cart-product-add">
                                {
                                    getCartData.map((product) => {
                                        return (
                                            <div className="cartContainer" key={product.id}>
                                                <div className="product_details">
                                                    <div className="detailsSection">
                                                        <div className="image_sec_cart">
                                                            <Link to='/product'>
                                                                <img src={product.default_image} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="info_sec_cart">
                                                            <Link to='/product' className='mt-5'>
                                                                <p className='longTitleCart'>{product.p_title}</p>
                                                            </Link>
                                                            <span className='colorCart'>Color: Black | Size: XS</span>
                                                            {/* price section  */}
                                                            <div className="priceSectionCart">
                                                                <div className="pp1">
                                                                    <p className='priceSubInfoVCart'> $ 50</p>
                                                                    <p className='priceCart'>Tk {product.total_price} </p>
                                                                </div>
                                                            </div>
                                                            {/* edit item  */}
                                                            <div className="editCart">
                                                                <div className="pp2">
                                                                    <p className='priceSubInfoVCart1'> Edit this item</p>

                                                                    <button className='viewCartEdit' >
                                                                        <AiOutlineEdit color='black' />
                                                                    </button>

                                                                </div>

                                                                {/* modal add start */}

                                                                <Modal
                                                                    className='modalArea1'
                                                                    open={open}
                                                                    onClose={handleClose}
                                                                    aria-labelledby="modal-modal-title"
                                                                    aria-describedby="modal-modal-description"
                                                                >
                                                                    <Box className='styleBox'>

                                                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                                            <div className="quickViewContent">
                                                                                <div className="imageView">
                                                                                    <img src={img1} alt="" />

                                                                                </div>
                                                                                <div className="infoView">
                                                                                </div>
                                                                            </div>
                                                                        </Typography>
                                                                    </Box>
                                                                </Modal>



                                                            </div>
                                                            {/* product increse decrease  */}
                                                            <div className="quantityDetails11">
                                                                <div className="increaseDecreaseCart">
                                                                    <div className="decrease">
                                                                        <button className='decreaseBtn' onClick={() => lowValue(product.id)}>
                                                                            <FiMinus className='minus-trending' color='black' size={20} />
                                                                        </button>
                                                                    </div>
                                                                    <div className="valueShowCView" >
                                                                        <span className='showOne'>{product.quantity}</span>
                                                                    </div>
                                                                    <div className="increase">
                                                                        <button className='increaseBtn' onClick={() => highValue(product.id)}>
                                                                            <GoPlus color='black' className='minus-trending' size={20} />
                                                                        </button>
                                                                    </div>

                                                                </div>
                                                                <div className="removeCart">
                                                                    <button className='removeBtn' onClick={() => removeFromCart(product.id)}>
                                                                        Remove
                                                                        <hr className='removeHr' />
                                                                    </button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <hr className='hrLow' />
                            </div>
                        </div>
                        <div className="gift-warp">
                            <CartGiftWarp />

                       
                        </div>
                        <div className="cart-subTotal">
                                <h3 className='subTotal'>Subtotal:</h3>
                                <h3 className='amount'>Tk 7,741.00</h3>
                            </div>




                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SubHeader;
