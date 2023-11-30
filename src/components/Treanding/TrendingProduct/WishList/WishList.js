import React, { useState } from 'react';
import './WishList.css';
import { AiOutlineHeart } from "react-icons/ai";

const WishList = (props) => {
    const [count, setCount] = useState(0);
    var wishlist = JSON.parse(localStorage.getItem('wishlistData') || '[]');
    function isItemInWishlist(item) {
        return wishlist.find(wishlistItem => wishlistItem.id === item.id);
    }

    function ProductAddWishList(itemData) {


        var isDuplicate = isItemInWishlist(itemData)
        console.log('data is:', itemData);
        console.log("isDuplicate = ", isDuplicate)
        if (!isDuplicate) {
            wishlist.push(itemData);
            localStorage.setItem('wishlistData', JSON.stringify(wishlist));
            setCount(count + 1);
            console.log('count is', count);
        } else {
            // alert('Item with the same ID already exists in the wishlist.')
            const initCount = 1;
            if (initCount < count) {
                setCount(count - 1);
                console.log('count decrese', count);
            }

        }
    }
    return (
        <div>
            <p className='wishlist'>wishlist</p>
            <AiOutlineHeart
                onClick={() => ProductAddWishList(props.ProductsData)}
                className='IconOverlay' color='black' size={35} />

        </div>
    );
};

export default WishList;