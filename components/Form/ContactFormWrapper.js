import React from 'react';

// custom
import { makeStyles } from '@material-ui/core/styles';

// material
import { Typography  } from '@material-ui/core/';
import { Close } from '@material-ui/icons';


// translation
import useTranslation from '../../hooks/useTranslation';
// import withLocale from '../../hocs/withLocale';
// import { LocaleContext } from '../../context/LocaleContext';

// custom
import ContactForm from './ContactForm';



const useStyles = makeStyles(theme => ({
  contactFormOuter: {
    // display: 'none',
  },
  contactFormBackdrop: {
    backgroundColor: 'rgba(17,17,17,.7)',
    width: '100%',
    position: 'fixed',
    top: '0',
    bottom: '0',
    zIndex: '-1',
  },
  contactFormWrapper: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: '0',
    right: '0',
    margin: '80px 24px',
    padding: '64px 24px 80px',
    borderRadius: '4px',
    zIndex: '20000',
    [theme.breakpoints.up('sm')]: {
      margin: '120px 56px',
      padding: '80px 32px',
      maxWidth: '800px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '1000px',
      padding: '80px 64px',
      margin: '120px auto',
    }
  },
  contactTitle: {
    margin: '0 0 24px',
  },
  contactIntro: {
    margin: '0 0 40px',
  },
  closeIcon: {
    position: 'absolute',
    right: '24px',
    top: '24px',
    cursor: 'pointer',
  }
}));

const ContactFormWrapper = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.contactFormOuter} style={props.contactOpen ? {display: 'block'} : {display: 'none'}}>
      <div className={classes.contactFormWrapper}>
        <Close className={classes.closeIcon} onClick={props.toggleContactForm}/>
        <Typography variant="h1" className={`${classes.contactTitle}`}>
          {t('contactTitle')}
        </Typography>
        <Typography variant="body1" className={`${classes.contactIntro}`}>
          {t('contactIntro')}
        </Typography>
        <ContactForm />
      </div>
      <div className={classes.contactFormBackdrop}>
      </div>
    </div>
  );
};


export default ContactFormWrapper;