// react
import React from 'react'

// material ui
import { Button, Typography, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// next
import Link from 'next/link';

// translation
import useTranslation from '../../hooks/useTranslation';

// custom
import BubbleWindow from './BubbleWindow';

const useStyles = makeStyles(theme => ({
  wrapper: {
    flexGrow: 1,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    padding: '0 24px',
    margin: '80px 0 120px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 40px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundSize: 'cover',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0',
    }
  },
  contentContainer: {
    maxWidth: '1260px',
    margin: '0 auto',
  },
  bubbleWindowsSection: {
    textAlign: 'center',
  },
}));



const ServicesOffered = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  return(  
    <Grid className={classes.wrapper} container>
      <Grid container className={classes.contentContainer} spacing={2}>
        <Grid item xs={12}>
          <div className={`${classes.section} ${classes.bubbleWindowsSection}`}>
            <Typography variant="h2">
              {props.title}
            </Typography>
            <Grid container spacing={3}>
              {
                props.servicesOffered.map( (serviceOffered, i) => {
                  return (
                    <Grid item xs={6} sm={4} md={2} key={i}>
                      <Link href={`/${props.locale}/${serviceOffered.link}`}>
                        <a>
                          <BubbleWindow text={t(serviceOffered.text)} bg={serviceOffered.image}/>
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