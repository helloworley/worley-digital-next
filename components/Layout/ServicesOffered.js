// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// next
import Link from 'next/link';

// translation
import { LocaleContext } from '../../context/LocaleContext';

// custom
import BubbleWindow from './BubbleWindow';

const useStyles = makeStyles(theme => ({
  wrapper: {
    flexGrow: 1,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    padding: '80px 24px 96px',
    backgroundColor: '#F5EBEB',
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('lg')]: {
    }
  },
  contentContainer: {
    maxWidth: '1260px',
    margin: '0 auto',
  },
  bubbleWindowsSection: {
    textAlign: 'center',
  },
  a: {
    textDecoration: 'none',
  },
  sectionTitle: {
    margin: '0 0 16px',
  },
  sectionSubtitle: {
    margin: '0 0 64px',
  },
  bubbleWindowWrapper: {
    [theme.breakpoints.up('md')]: {
      margin: '0 auto'
    },
  }
}));



const ServicesOffered = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  const switchText = ( textEn, textJa ) => {
    return locale == 'en' ? textEn : textJa;
  }

  return(  
    <Grid className={classes.wrapper} container>
      <Grid container className={classes.contentContainer} spacing={2}>
        <Grid item xs={12}>
          <div className={`${classes.section} ${classes.bubbleWindowsSection}`}>
            <Typography variant="h2" className={classes.sectionTitle}>
              {props.title}
            </Typography>
            <Typography className={classes.sectionSubtitle}>
              {props.subtitle}
            </Typography>
            <Grid container spacing={3}>
              {
                props.servicesOffered.map( (serviceOffered, i) => {
                  const text_en = serviceOffered.fields.serviceName.en;
                  const text_ja = serviceOffered.fields.serviceName.ja;
                  const image = serviceOffered.fields.image.en.fields.file.en.url;
                  const link = serviceOffered.fields.link.en;
                  return (
                    <Grid item xs={6} sm={4} md={2} key={i} className={classes.bubbleWindowWrapper}>
                      <Link href={`${link}`}>
                        <a className={classes.a}>
                          <BubbleWindow text={switchText(text_en, text_ja)} bg={image}/>
                        </a>
                      </Link>
                    </Grid>
                  )
                })
              }
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )};

export default ServicesOffered;