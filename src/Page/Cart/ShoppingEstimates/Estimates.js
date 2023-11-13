import React, { useEffect, useState } from 'react';
import './Estimates.css';
// import Select from "react-select";


const Estimates = () => {
    // step 2 start here
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
        <div className='estimates'>
            <div className="estimatesBody">
                <div className="estimateContent">
                    <h3 className='titleEstimate'>Get shipping estimates</h3>
                    <div className="estimatesContents">
                        <div className="country">
                            <select className='countryName'>
                                {/* <option value="">Select a country</option> */}
                                {countries.map(country => (
                                    <option className='optionsEle' key={country.name.common} value={country.name.common}>
                                        {country.name.common}
                                    </option>
                                ))}
                            </select>
                           

                        </div>
                        <div className="stateContent">
                            <input type="text" name="state" id="stateId" className='StateCls' placeholder='state' />

                        </div>
                        <div className="zipCodeEstimate">
                            <input type="text" placeholder='Zip Code' className='zipCodeField' id='zipCodeEstimate' />

                        </div>
                        <div className="estimateBtnHead">
                            <button>
                                estimate
                            </button>

                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Estimates;