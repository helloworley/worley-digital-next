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
import ContentfulToHTML from '../ContentfulToHTML';

const useStyles = makeStyles(theme => ({
  section: {
    [theme.breakpoints.up('sm')]: {
      padding: '120px 40px',
    },
  },
  image: {
    maxWidth: '100%',
  },
  buttonWrap: {
    margin: '32px 0 0'
  },
  button: {
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
}));


const SectionImageLeftTextRight = props => {
  const classes = useStyles();
  const { locale } = React.useContext(LocaleContext);

  return(  
    <div className={classes.section}>
      <Grid className={classes.wrapper} container spacing={8}>
        <Grid item xs={12} md={4} className={classes.colOptions}>
          <img src={props.image} className={classes.image} />
        </Grid>
        <Grid item xs={12} md={8} className={classes.colContent}>
          <h2>{props.title}</h2>
          <ContentfulToHTML dataEn={props.dataEn} dataJa={props.dataJa}/>
          <div className={classes.buttonWrap}>
            <Link href={`/${locale}/${props.link}`}>
              <Button variant="contained" color="primary" className={classes.button} onClick={props.toggleContactForm} >
                {props.buttonText}
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  )};

export default SectionImageLeftTextRight;