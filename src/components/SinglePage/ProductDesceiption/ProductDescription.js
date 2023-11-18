import React from 'react';
import './ProductDescription.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const ProductDescription = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='pro-des-main'>
            <div className="des-sub">
                <div className="tab-sec">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>

                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <div className="tabHead">
                                    <div className="panel">

                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab className='tabName' label="Description" value="1" />
                                            <Tab className='tabName' label="Review" value="2" />
                                            <Tab className='tabName' label="Shipping" value="3" />
                                            <Tab className='tabName' label="Return" value="4" />
                                        </TabList>
                                    </div>

                                </div>

                            </Box>

                            <TabPanel value="1">Item One</TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>




                        </TabContext>
                    </Box>

                </div>

            </div>

        </div>
    );
};

export default ProductDescription;