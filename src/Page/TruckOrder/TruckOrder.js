import React, { useState } from 'react';
import './TruckOrder.css';
import Header from '../../layout/Header/Header';
import { Link } from 'react-router-dom';
import { ErrorMessage, SuccessMessage } from '../../Utilities/Message/Message';
import { LoginValidate } from '../../Validation/Validate';


const TruckOrder = () => {

    const initVal = {
        email: '',
        password: '',

    }
    const [userData, setUserData] = useState(initVal);
    const [err, setErr] = useState('');
    const [error, setError] = useState(userData);
    const [success, setSuccess] = useState('');

    // onchangeHandler input 
    const onchangeHandle = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        console.log('data');

    }

    // form submit 

    const handleSubmit = (e) => {
        e.preventDefault();

        // evet.preventDefault();
        setError(LoginValidate(userData));
        console.log('kkkkkk');


    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('You clicked submit.');
    // }


    return (
        <>

            <div className='truckOrder'>
                <div className="header-truck-order">
                    <Header />
                </div>
                <h1 className='truckOrderTitle'>orders</h1>
                <div className="login-truck-sec">



                    <h1 className='log-truckTitle'>login</h1>
                    <div className="content-truck-inputs">
                        {/* <form onSubmit={handleSubmit} autoComplete='off'> */}
                        <form >
                            <input type='text' placeholder='email' className='userName-truck' onChange={onchangeHandle} name='email' value={userData.email} autoComplete='off' />
                            {error.email && ErrorMessage(error.email)}

                            <input type="password" placeholder='password' name='password' value={userData.password} className='userPass-truck' onChange={onchangeHandle} autoComplete='off' />
                            {error.password && ErrorMessage(error.password)}


                            <div className="check-con-truck">
                                <input type="checkbox" id="checkBox-truck" name="checkbox" />
                                <label for="checkbox" className='remember-title'> Remember me</label>
                            </div>
                            <div className="truck-logBt">
                                <button  onSubmit={handleSubmit} className='btn-truckCls'  >log in </button>
                            </div>
                        </form>
                        <div className="lost-pass-truck">
                            <Link to='my-account/lost-password' className='link-truck'>Lost your password?</Link>

                        </div>


                    </div>



                </div>

            </div>
            {/* <form >
                <button >Submit</button>
            </form> */}

        </>

    );
};

export default TruckOrder;