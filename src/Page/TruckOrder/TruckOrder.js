import React from 'react';
import './TruckOrder.css';
import Header from '../../layout/Header/Header';
import { Link } from 'react-router-dom';


const TruckOrder = () => {
    return (
        <div className='truckOrder'>
            <div className="header-truck-order">
                <Header />
            </div>
            <h1 className='truckOrderTitle'>orders</h1>
            <div className="login-truck-sec">
                <h1 className='log-truckTitle'>login</h1>
                <div className="content-truck-inputs">
                    <form action="">
                        <input type="text" placeholder='UserName' className='userName-truck' />
                        <input type="password" placeholder='UserName' className='userPass-truck' />
                        <div className="check-con-truck">
                            <input type="checkbox" id="checkBox-truck" name="checkbox" />
                            <label for="checkbox" className='remember-title'> Remember me</label>
                        </div>
                        <div className="truck-logBt">
                            <button className='btn-truckCls'>log in </button>
                        </div>
                    </form>
                    <div className="lost-pass-truck">
                        <Link to='my-account/lost-password' className='link-truck'>Lost your password?</Link>

                    </div>


                </div>



            </div>

        </div>
    );
};

export default TruckOrder;