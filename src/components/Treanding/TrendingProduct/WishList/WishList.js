import React, { useState } from 'react';
import './WishList.css';
import { AiOutlineHeart } from "react-icons/ai";
import Header from '../../../../layout/Header/Header'

const WishList = (props) => {
    const [count, setCount] = useState(1);
    localStorage.setItem('wishlistValue', JSON.stringify(count));
    // const [showWishlist, setShowWishlist] = useState(false)
    var wishlist = JSON.parse(localStorage.getItem('wishlistData') || '[]');
    function isItemInWishlist(item) {
        return wishlist.find(wishlistItem => wishlistItem.id === item.id);
    }
    // Find the index of the item with id equal to item id
    function findIndexOfWishList(item) {
        const indexToRemove = wishlist.findIndex(wishlistItem => wishlistItem.id === item.id);
        console.log("indexToRemove = ", indexToRemove)
        return indexToRemove;
    }


    function ProductAddWishList(itemData) {
        var wishlist = JSON.parse(localStorage.getItem('wishlistData') || '[]');
        const itemExists = wishlist.filter(wishlistItem => wishlistItem.id === itemData.id);
        console.log("itemExists = ", itemExists);

        // Step 4: If item with id doesn't exist, add it to the wishlist
        if (itemExists.length === 0) {
            wishlist.push(itemData);
            localStorage.setItem('wishlistData', JSON.stringify(wishlist));
        } else {
            // Step 5: If item with id exists, remove it from the wishlist
            const updatedWishlist = wishlist.filter(wishlistItem => wishlistItem.id !== itemData.id);
            console.log("updatedWishlist = ", updatedWishlist);
            localStorage.setItem('wishlistData', JSON.stringify(updatedWishlist));
        }

    }


    function ProductAddWishList1(itemData) {
        const itemExists = wishlist.filter(wishlistItem => wishlistItem.id === itemData.id);
        console.log("itemExists = ", itemExists);

        // Step 4: If item with id doesn't exist, add it to the wishlist
        if (itemExists.length === 0) {
            wishlist.push(itemData);
            localStorage.setItem('wishlistData', JSON.stringify(wishlist));
        } else {
            // Step 5: If item with id exists, remove it from the wishlist
            const updatedWishlist = wishlist.filter(wishlistItem => wishlistItem.id !== itemData.id);
            localStorage.setItem('wishlistData', JSON.stringify(updatedWishlist));
        }

        // Step 3: Check if item with id equal or not exists
        // Step 4: Check if an item with the same id exists in the wishlist
        // const itemExists = wishlist.some(wishlistItem => wishlistItem.id === itemData.id);
        // console.log("itemExists = ", itemExists);
        // // Step 5: If item with id doesn't exist, add it to the wishlist
        // if (!itemExists) {
        //     wishlist.push(itemData);

        //     // Step 6: Update local storage with modified data
        //     localStorage.setItem('wishlistData', JSON.stringify(wishlist));
        // }
        // var isDuplicate = isItemInWishlist(itemData)
        // console.log('data is:', itemData);
        // console.log("isDuplicate = ", isDuplicate)
        // if (!isDuplicate) {
        //     wishlist.push(itemData);
        //     localStorage.setItem('wishlistData', JSON.stringify(wishlist));
        //     // setCount(count + 1);
        //     console.log('count is', count);
        // } else {
        //     // alert('Item with the same ID already exists in the wishlist.')
        //     const initCount = 1;
        //     if (initCount < count) {
        //         setCount(count - 1);
        //         console.log('count decrese', count);

        //     }
        // }
    }

    return (
        <div>
            <p className='wishlist'>wishlist</p>
            <AiOutlineHeart
                onClick={() => ProductAddWishList(props.ProductsData)}
                className='IconOverlay' color='black' size={35} />
            {/* <Header childName={count}/> */}

        </div>
    );
};

export default WishList;