import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from './Home';
import SignUp from './Pages/SignUp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
       
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Categories" {...a11yProps(1)} />
        <Tab label="Cart" {...a11yProps(2)} />
        <Tab label="Hot Deals" {...a11yProps(3)} />
        <Tab label="Favourite" {...a11yProps(4)} />
        <Tab label="Messanger" {...a11yProps(5)} />
        <Tab label="Create Account" {...a11yProps(6)} ></Tab>
         
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Categories</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>Cart</h1>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>Hot Deals</h1>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1>Favourite</h1>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h1>Messanger</h1>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <SignUp />
      </TabPanel>
    </Box>
  );
}