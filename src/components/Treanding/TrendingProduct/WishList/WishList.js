import React from 'react';
import './WishList.css';
import { AiOutlineHeart } from "react-icons/ai";

const WishList = (props) => {
    var wishlist = JSON.parse(localStorage.getItem('wishlistData') || '[]');
    function isItemInWishlist(item) {
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
        <div>
            <p className='wishlist'>wishlist</p>
            <AiOutlineHeart
                onClick={() => ProductAddWishList(props.ProductsData)}
                className='IconOverlay' color='black' size={35} />

        </div>
    );
};

export default WishList;