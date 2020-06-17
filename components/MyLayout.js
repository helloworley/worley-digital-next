
import { useEffect } from 'react';
import { Grid, Hidden } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';

// custom
import NavMobile from './Nav/NavMobile';
import NavDesktop from './Nav/NavDesktop';
import ContactFormWrapper from './Form/ContactFormWrapper';

// translation
import useTranslation from '../hooks/useTranslation';
import { LocaleContext } from '../context/LocaleContext';

// GA
import React from 'react';
import { initGA, logPageView } from '../utils/analytics';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridContainerCustomizations: {
    width: '100%',
  },
  root: {
    flexGrow: 1,
    paddingBottom: '0 !important'
  },
  content: {
    width: '100%',
  },
  rightPannel: {
    overflow: 'auto',
    padding: '120px 0 0',
    [theme.breakpoints.up('md')]: {
      padding: '108px 0 0',
      height: '100vh',
    },
  },
  normalizeGridItem: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
}));

const Layout = props => {
  const classes = useStyles();

  const { t } = useTranslation();
  const { locale } = React.useContext(LocaleContext)

  useEffect(() => {
    // code to run on component mount
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <>
      <Hidden smUp>
        <NavMobile locale={locale} />
      </Hidden>

      <div className={classes.root}>
        
        <Hidden xsDown>
          <NavDesktop 
            menuColor={props.menuColor} 
            locale={props.locale}  
            toggleContactForm={props.toggleContactForm} 
            toggleServicesHovered={props.toggleServicesHovered}
            servicesHovered={props.servicesHovered}
          />
        </Hidden>
        
        <ContactFormWrapper 
          contactOpen={props.contactOpen}
          toggleContactForm={props.toggleContactForm} 
        />

        <div className={classes.content}>
          {props.children}
        </div>        

        <Footer />

      </div>
      </>
  );
}


export default Layout;