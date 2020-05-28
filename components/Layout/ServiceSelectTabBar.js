// react
import React from 'react'
import PropTypes from 'prop-types';

// material ui
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// next
import Link from 'next/link';

// translation
import useTranslation from '../../hooks/useTranslation';

// data 
import services from '../../data/servicesOffered';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ServicesOffered = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          {
            services.map( (service, i) => {
              return (
                <Link href={service.link}>
                  <Tab label={t(service.text)} {...a11yProps(i)} />
                </Link>
              )
            })
          }
        </Tabs>
      </AppBar>
      {
        services.map( (service, i) => {
          <TabPanel value={value} index={i}>
            {t(service.text)}
          </TabPanel>
        })
      }
    </div>
  );
}


export default ServicesOffered;