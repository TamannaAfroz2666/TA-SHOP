import React, { useEffect, useState } from 'react';
import './BillingAdress.css'

const BillingAddress = () => {
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
        <div className='billAddress'>
            <div className="billingContent">
            <h3 className='paymentTitle'>Billing address</h3>
                <div className="countryNameContentBill">
                    <select className='countryNameCheckBill'>
                        <option value="" className='selectOption'>Select a country</option>
                        {countries.map(country => (

                            <option className='optionsEle1' key={country.name.common} value={country.name.common}>
                                {country.name.common}
                            </option>

                        ))}
                    </select>
                </div>
                <div className="nameContentBill">
                    <div className="firstCon">
                        <input type="text" name='name' className='firstCheckName' id='firstCheckName' placeholder='First name (optional)' />

                    </div>
                    <div className="lastContent">
                        <input type="text" name='name' className='secondCheckName' id='secondCheckName' placeholder='Last name' />

                    </div>
                </div>
                <div className="addressCheckBoxBill">
                    <input type="text" name='address' id='addressId' className='addressCls' placeholder='Address' />
                </div>
                <div className="nameContentBill">
                    <div className="firstCon">
                        <input type="text" name='city' className='firstCheckName' id='firstCheckName' placeholder='City' />

                    </div>
                    <div className="lastContent">
                        <input type="text" name='postal' className='secondCheckName' id='secondCheckName' placeholder='Postal Code' />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BillingAddress;
