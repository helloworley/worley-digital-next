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
    color: theme.palette.primary.darkText,
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
    color: theme.palette.primary.darkText,
    fontSize: '1.4em',
    margin: '0 0 32px',
    fontWeight: '800',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.7em',
      margin: '0 auto 32px',
      maxWidth: '800px',
    },
  },
  description: {
    color: theme.palette.primary.darkText,
    fontSize: '1em',
    margin: '0 0 32px',
    // fontWeight: '800',
    [theme.breakpoints.up('md')]: {
      // fontSize: '1.4em',
      margin: '0 auto 48px',
      maxWidth: '800px',
    },
  },
  wrapper: {
    flexGrow: 1,
    margin: '0 auto',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover !important',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center !important',
  },
  wrapperInner: {
    // backgroundColor: 'rgba(0,0,0,.6)',
    padding: '30%',
    [theme.breakpoints.up('md')]: {
      padding: '56%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '300px',
    },
  },
  contentContainer: {
    // maxWidth: '1260px',
    // margin: '0 auto',
  },
  centeredWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
  },
  buttonWrap: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
    }
  },
  button: {
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  moodIcon: {
    margin: '0 0 0 4px',
    fontSize: '20px',
  },
  informationWrapper: {
    padding: '8% 8% 16%',
    [theme.breakpoints.up('md')]: {
      padding: '15%',
    }
  }
}));


const HalfWidthSnapshotLeft = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const containsBgImage = props.bgImage ? { background: `url(${props.bgImage})`} : null;

  return(  
    <Grid container className={classes.contentContainer}>
      <Grid item xs={12} md={6}>
        <div className={classes.wrapper} style={containsBgImage}>
          <div className={classes.wrapperInner}>
            </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.informationWrapper}>
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
    
  )};

export default HalfWidthSnapshotLeft;