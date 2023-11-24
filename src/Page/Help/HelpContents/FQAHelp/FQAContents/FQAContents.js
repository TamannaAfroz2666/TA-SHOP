import React from 'react';
import './FQAContents.css';
import Accordion from 'react-bootstrap/Accordion';



const FQAContents = () => {

    return (
        <div className='fqaContents'>
            <div className="fquContent">
                <div className="content-sec">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='head-acc'>
                            <h1 className='head-title'>How do I know that my products lorem ipsum dolor sit?</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="acc-body">
                                <p className='acc-des'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='head-acc'>
                            <h1 className='head-title1'>Where can I see my invoices?</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="acc-body">
                                <p className='acc-des'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className='head-acc'>
                            <h1 className='head-title1'>Can I compare prices between tincidunt dui in congue?</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="acc-body">
                                <p className='acc-des'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className='head-acc'>
                            <h1 className='head-title1'>Are there any surcharges?</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="acc-body">
                                <p className='acc-des'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header className='head-acc'>
                            <h1 className='head-title1'>I made an online purchase. Where can I check order status?</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="acc-body">
                                <p className='acc-des'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                </div>
              





            </div>

        </div>
    );

};

export default FQAContents;