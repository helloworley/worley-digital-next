// react
import React from 'react'

// data
import data from '../../data/about.json';
const bgImage = '/about-background.jpg';

// material ui
import { Grid, Button, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// next
import Link from 'next/link';

// translation
import useTranslation from '../../hooks/useTranslation';
import withLocale from '../../hocs/withLocale';
import { LocaleContext } from '../../context/LocaleContext';


// custom
import Layout from '../../components/MyLayout';
import Hero from '../../components/Layout/Hero';
import ServicesOffered from '../../components/Layout/ServicesOffered';



const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    overflowX: 'hidden',
  },
  h1: {
    textAlign: 'center',
    margin: '0 0 24px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5em',
    },
    [theme.breakpoints.up('md')]: {
    },
  },
  subtitle: {
    maxWidth: '440px',
    margin: '0 auto 40px',
  },
  section: {
    margin: '120px 0 0',
  },
  bubbleWindowsSection: {
    textAlign: 'center',
  },
  text: {
    color: '#fff'
  },
  h2: {
    fontSize: '1.2em',
    margin: '32px 0 24px',
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
    }
  },
  logo: {
    maxWidth: '120px',
    margin: '0 0 8px',
  },
  wrapper: {
    // backgroundImage: `url(${bgImage})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    flexGrow: 1,
    width: '100%',
    backgroundRepeat: 'no-repeat',
  },
  wrapperInner: {
    // backgroundColor: 'rgba(17,17,17,.7)',
    width: '100%',
    padding: '112px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '160px 40px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '160px 0',
    }
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
  background: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    zIndex: '-1',
  },
  backgroundInner: {
    backgroundColor: 'rgba(17,17,17,.7)',
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
  }
}));

const Index = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext)

  return(
    <Layout
      locale={locale}
      toggleContactForm={props.toggleContactForm} 
      contactOpen={props.contactOpen}
    >
      <>
      <div className={classes.wrapper}>
        <div className={classes.wrapperInner}>
          <Grid container className={classes.contentContainer} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" className={`${classes.text} ${classes.h1}`} >
                {data.title[locale]}
              </Typography>
              <Typography variant="h4" className={`${classes.text} ${classes.subtitle}`}>
                {data.subtitle[locale].content[0].content[0].value}
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.contentContainer} spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className={`${classes.text} ${classes.h2}`} >
                {data.paragraph1Title[locale]}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                {data.paragraph1[locale].content[0].content[0].value}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className={`${classes.text} ${classes.h2}`} >
                {data.paragraph2Title[locale]}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                {data.paragraph2[locale].content[0].content[0].value}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.background}>
        <div className={classes.backgroundInner}></div>
      </div>
      </>
    </Layout>
  )};

export default withLocale(Index);