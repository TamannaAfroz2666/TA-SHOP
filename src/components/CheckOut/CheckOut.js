import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import { BsBag } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiGift2Fill } from "react-icons/ri";
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
                                    <LiaCarSideSolid color='black' size={20}/>
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
                                    <RiGift2Fill color='black' size={20}/>
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


                    </div>
                    <div className="productCheckOut">

                    </div>
                </div>

            </div>

        </div>
    );
};

export default CheckOut;