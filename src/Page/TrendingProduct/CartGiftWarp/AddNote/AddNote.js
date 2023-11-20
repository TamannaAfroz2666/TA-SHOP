import React from 'react';
import './AddNote.css';
import { PiNotePencilThin } from "react-icons/pi";
import { GrNote } from "react-icons/gr";


const AddNote = () => {
    const handleNote = () => {
        console.log('note');
    }
    return (
        <div className='addGiftHead'>
            <button onClick={handleNote}>
                <span className='giftIconTitle'><PiNotePencilThin size={18}  className='giftIcon'/> </span>
                <p className='add-gift-title'>Add note</p>
            </button>
            
        </div>
    );
};

export default AddNote;