import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import { BsBag } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiGift2Fill } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import { TbLetterB } from "react-icons/tb";
import { Link } from 'react-router-dom';


const CheckOut = () => {
    // step 1 country name start here
    const [countries, setCountries] = useState([]);


    async function fetchCountryData() {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            // Handle error
            console.error('Error fetching country data: ', error);
            return [];
        }
    }

    useEffect(() => {
        async function fetchCountries() {
            const data = await fetchCountryData();
            setCountries(data);
        }
        fetchCountries();
    }, []);
    return (
        <div className='checkout'>
            <div className="checkoutSection">
                <div className="checkoutHead">
                    <div className="checkTitleSec">
                        <h3 className='titleCheck'>TA SHOP products</h3>
                    </div>
                    <div className="iconCheckSec">
                        <Link to='/cart'>
                            <BsBag color='tomato' size={25} className='bsBagIcon' />
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="checkOutContent">
                    <div className="infoCheckOut">
                        <div className="titleInfoSec">
                            <div className="conSec1">
                                <h3 className='conTitle'>Contact</h3>
                            </div>
                            <div className="subLog">
                                <p className='accountTitle'>Have an account?
                                    <span className='spLog'><a href="/login-page">Log in</a></span>
                                </p>
                            </div>

                        </div>
                        <div className="emailNumCon">
                            <input type="text" name='email' className='emailNum' placeholder='Email or mobile phone number' />
                            <div className="checkboxMain">
                                <input type="checkbox" id="vehicle1" name="input1" value="Bike" />
                                <label for="input1" className='checkLabel'> Email me with news and offers</label>
                            </div>
                        </div>
                        <div className="deliveryContent">
                            <h3 className='deliveryTitle'>delivery</h3>
                            <div className="shipC">
                                <div className="shipInfo">
                                    <div className="checkboxMain">
                                        <input type="radio" id="ship1" name="ship1" value="ship" />
                                        <label for="ship1" className='checkLabel'> Ship</label>
                                    </div>

                                </div>
                                <div className="shipIcon">
                                    <LiaCarSideSolid color='black' size={20} />
                                </div>
                            </div>
                            <div className="pickC">
                                <div className="shipInfo">
                                    <div className="checkboxMain">
                                        <input type="radio" id="pickup" name="pickup" value="pickup" />
                                        <label for="pickup" className='checkLabel'> Pick up</label>
                                    </div>

                                </div>
                                <div className="shipIcon">
                                    <RiGift2Fill color='black' size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="countryNameContent">
                            <select className='countryNameCheck'>
                                <option value="" className='selectOption'>Select a country</option>
                                {countries.map(country => (

                                    <option className='optionsEle1' key={country.name.common} value={country.name.common}>
                                        {country.name.common}
                                    </option>

                                ))}
                            </select>
                        </div>
                        <div className="nameContent">
                            <div className="firstCon">
                                <input type="text" name='name' className='firstCheckName' id='firstCheckName' placeholder='First name (optional)' />

                            </div>
                            <div className="lastContent">
                                <input type="text" name='name' className='secondCheckName' id='secondCheckName' placeholder='Last name' />

                            </div>
                        </div>
                        <div className="addressCheckBox">
                            <input type="text" name='address' id='addressId' className='addressCls' placeholder='Address' />
                        </div>
                        <div className="nameContent">
                            <div className="firstCon">
                                <input type="text" name='city' className='firstCheckName' id='firstCheckName' placeholder='City' />

                            </div>
                            <div className="lastContent">
                                <input type="text" name='postal' className='secondCheckName' id='secondCheckName' placeholder='Postal Code' />

                            </div>
                        </div>
                        <div className="saveInfo">
                            <input type="checkbox" id="vehicle1" name="input1" value="Bike" />
                            <label for="input1" className='checkLabel'> Save this information for next time</label>
                        </div>
                        {/* shipping method phase  */}
                        <div className="point">
                            <div className="shippingMethod22">
                                <h3 className='shipping_title2'>shipping content</h3>
                                <div className="alertContent22">
                                    <p>
                                        <FiAlertCircle color='red' size={25} className='alertCir1' />
                                        <span className='shpingTitle11'> Shipping not available </span>
                                    </p>
                                    <p className='alertDes11'>Your order cannot be shipped to the selected address. Review your address to ensure it's correct and try again, or select a different address.</p>

                                </div>
                            </div>
                        </div>
                        {/* payment section  */}
                        <div className="paymentSec">
                            <h3 className='paymentTitle'>Payment</h3>
                            <p className='payDes'>All transactions are secure and encrypted.</p>
                            <div className="creditContainer">
                                <div className="cardSec">
                                    <div className="cardTitle">
                                        <p className='creditTitle'>Credit card</p>

                                    </div>
                                    <div className="cardIcon">
                                        <TbLetterB color='white' size={25} className='bLetterIcon' />

                                    </div>
                                </div>
                                {/* card number  */}
                                <div className="cardNumContent">
                                    <input type="number" className='cardNumCls' id='cardNumId' placeholder='Card Number' />
                                </div>
                                {/* date & code  */}
                                <div className="dateCode">
                                    <div className="firstCon">
                                        <input type="text" name="date" className='firstCheckName' id='firstCheckName' placeholder='Expiration date (MM/ YY)' pattern="\d{4}-\d{2}-\d{2}" required />

                                    </div>
                                    <div className="lastContent">
                                        <input type="number" name='number' className='secondCheckName' id='secondCheckName' placeholder='Security code' />

                                    </div>
                                </div>
                                {/* card name  */}
                                <div className="cardNumContent">
                                    <input type="text" className='cardNumCls' id='cardNumId' placeholder=' Name on card' />
                                </div>
                                {/* checkbox  */}
                                <div className="savePayment">
                                    <input type="checkbox" id="vehicle1" name="input1" value="Bike" />
                                    <label for="input1" className='checkLabel'> Save this information for next time</label>
                                </div>



                            </div>

                        </div>



                    </div>
                    <div className="productCheckOut">

                    </div>
                </div>

            </div>

        </div>
    );
};

export default CheckOut;