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
                            <div className="gg">
                            <div className="panel">
                          
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Item One" value="1" />
                                    <Tab label="Item Two" value="2" />
                                    <Tab label="Item Three" value="3" />
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