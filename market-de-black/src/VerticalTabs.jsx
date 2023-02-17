import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link';
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
      
        <Link href="/categories">
        <Tab label="Categories" {...a11yProps(1)} />
        </Link>
        <Link href="/items">
        <Tab label="Items" {...a11yProps(2)} />
        </Link>
        <Link href="/hotdeals">
        <Tab label="Hot Deals" {...a11yProps(3)} />
        </Link>
        <Link href="/favourite">
        <Tab label="Favourite" {...a11yProps(4)} />
        </Link>
        <Link href="/profile">
        <Tab label="Profile" {...a11yProps(5)} />
        </Link>
          
            <Tab label="Create Account" {...a11yProps(6)} ></Tab>
         
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
      <TabPanel value={value} index={3}>
      </TabPanel>
      <TabPanel value={value} index={4}>
      </TabPanel>
      <TabPanel value={value} index={5}>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <SignUp />
      </TabPanel>
    </Box>
  );
}