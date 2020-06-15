// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import MoodIcon from '@material-ui/icons/Mood';

// next
import Link from 'next/link';

// translation
import { LocaleContext } from '../../context/LocaleContext';

// custom
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  h1: {
    color: theme.palette.primary.lightText,
    textAlign: 'center',
    fontSize: '2em',
    margin: '0 0 24px',
    // textShadow: '0px 0px 10px rgba(0,0,0,0.7)',
    [theme.breakpoints.up('md')]: {
      fontSize: '3.2em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.8em',
    }
  },
  subtitle: {
    color: theme.palette.primary.lightText,
    fontSize: '1.4em',
    textAlign: 'center',
    margin: '0 0 32px',
    fontWeight: '800',
    // textShadow: '0px 0px 10px rgba(0,0,0,0.7)',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.7em',
      margin: '0 auto 32px',
      maxWidth: '800px',
    },
  },
  description: {
    color: theme.palette.primary.lightText,
    fontSize: '1em',
    textAlign: 'center',
    margin: '0 0 32px',
    // textShadow: '0px 0px 10px rgba(0,0,0,0.7)',
    fontWeight: '800',
    [theme.breakpoints.up('md')]: {
      // fontSize: '1.4em',
      margin: '0 auto 48px',
      maxWidth: '800px',
    },
  },
  wrapper: {
    // backgroundImage: `url(${bgImage})`,
    flexGrow: 1,
    margin: '0 auto',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center !important',
    // backgroundAttachment: 'fixed !important', 
    // [theme.breakpoints.up('sm')]: {
    //   padding: '0 40px',
    // },
    // [theme.breakpoints.up('md')]: {
    // },
    // [theme.breakpoints.up('lg')]: {
    //   padding: '0',
    // }
  },
  wrapperInner: {
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: '90px 24px 80px',
    [theme.breakpoints.up('md')]: {
      padding: '140px 0 120px',
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


const FullWidthSnapshot = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

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
              <Typography className={classes.description}>
                {props.description}
              </Typography>
              <div className={classes.buttonWrap}>
                <Link href={`/${locale}/${props.link}`}>
                  <Button variant="contained" className={classes.button} onClick={props.toggleContactForm} >
                    {props.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )};

export default FullWidthSnapshot;