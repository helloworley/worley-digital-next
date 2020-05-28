// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import MoodIcon from '@material-ui/icons/Mood';

// next
// import Link from 'next/link';

// translation
import useTranslation from '../../hooks/useTranslation';


// custom
import { makeStyles } from '@material-ui/core/styles';

// assets
// const bgImage = '/triangle-backdrop.svg';


const useStyles = makeStyles(theme => ({
  h1: {
    color: theme.palette.primary.lightText,
    textAlign: 'center',
    fontSize: '2em',
    margin: '0 0 24px',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.2em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.8em',
    }
  },
  subtitle: {
    color: theme.palette.primary.lightText,
    fontSize: '1em',
    textAlign: 'center',
    margin: '0 0 32px',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4em',
      margin: '0 auto 32px',
      maxWidth: '560px',
    },
  },
  buttonWrap: {
    textAlign: 'center',
  },
  wrapper: {
    // backgroundImage: `url(${bgImage})`,
    flexGrow: 1,
    margin: '0 auto',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(17,17,17,.7)',
    padding: '0 24px',
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center !important',
    [theme.breakpoints.up('sm')]: {
      padding: '0 40px',
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0',
    }
  },
  wrapperInner: {
    backgroundColor: 'rgba(17,17,17,.7)',
    padding: '120px 0 80px',
    [theme.breakpoints.up('md')]: {
      padding: '200px 0 140px',
    },
  },
  contentContainer: {
    maxWidth: '1260px',
    margin: '0 auto',
  },
  centeredWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
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

//sentiment_very_satisfied


const Hero = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  const containsBgImage = props.bgImage ? { background: `url(${props.bgImage})`} : null;

  return(  
    <div className={classes.wrapper} style={containsBgImage}>
      <div className={classes.wrapperInner}>
        <Grid container className={classes.contentContainer} spacing={2}>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Typography variant="h1" className={classes.h1} gutterBottom>
                {props.title}
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                {props.subtitle}
              </Typography>
              <div className={classes.buttonWrap}>
                <Button variant="contained" className={classes.button} onClick={props.toggleContactForm} >
                  {t('homeFeatureButtonText')}
                  <MoodIcon className={classes.moodIcon}/>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )};

export default Hero;