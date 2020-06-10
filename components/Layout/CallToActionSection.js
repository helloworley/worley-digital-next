// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import MoodIcon from '@material-ui/icons/Mood';

// translation
import useTranslation from '../../hooks/useTranslation';

// translation
import { LocaleContext } from '../../context/LocaleContext';

const useStyles = makeStyles(theme => ({
  CallToActionSection: {
    width: '100%',
    backgroundColor: '#FAF9F9',
    padding: '80px 32px',
    margin: '0 auto'
  },
  text: {
    margin: '0 auto 24px',
    maxWidth: '800px',
    textAlign: 'center',
  },
  buttonWrap: {
    textAlign: 'center',
  },
  button: {
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  moodIcon: {
    margin: '0 0 0 4px',
    fontSize: '20px',
  }
}));



const CallToActionSection = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);
  const { t } = useTranslation();

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  return(  
    <div className={classes.CallToActionSection}>
      <Typography className={classes.text}>
        {switchText(props.text.en, props.text.ja)}
      </Typography>
      {/* <div className={classes.buttonWrap}>
        <Button variant="contained" className={classes.button} onClick={props.toggleContactForm} color="primary">
          {t('homeFeatureButtonText')}
          <MoodIcon className={classes.moodIcon}/>
        </Button>
      </div> */}
    </div>
  )};

export default CallToActionSection;